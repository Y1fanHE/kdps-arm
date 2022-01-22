'''
Author: He,Yifan
Date: 2021-12-08 18:06:56
LastEditors: He,Yifan
LastEditTime: 2021-12-08 18:06:56
'''
import random, time, sys, numpy
from pyshgp.gp.estimators import PushEstimator
from pyshgp.gp.genome import GeneSpawner, Genome, VirusSpawner
from pyshgp.gp.variation import (
    AdditionMutation, DeletionMutation, ReplaceMutation, VariationPipeline
)
from pyshgp.push.atoms import Input, InstructionMeta
from pyshgp.push.config import PushConfig
from pyshgp.push.instruction_set import InstructionSet
from load_benchmark import create_data
seed = int(sys.argv[1])                                     # random seed


'''Train/Test data
'''
problem = 'compare-string-lengths'                          # benchmark name
benchmark_root = 'psgb'                                     # benchmark root
train_edge_case = 22                                        # edge in train
train_rand_case = 78                                        # random in train
test_edge_case = 0                                          # edge in test
test_rand_case = 1000                                       # random in test

train = create_data(                                        # create train data
    problem,
    train_edge_case,
    train_rand_case,
    benchmark_root,
    seed=seed
)
test = create_data(                                         # create test data
    problem,
    test_edge_case,
    test_rand_case,
    benchmark_root,
    seed=seed
)


'''Primitives
'''
n_inputs = 3                                                # number of inputs
last_str_from_stdout = False                                # no print string
types = {                                                   # primitive types
    'exec', 'int', 'bool', 'str'
}

literals = []                                               # literals

def rand_bool():                                            # boolean ERC
    return bool(random.randint(0, 1))

erc_generators = [                                          # erc generators
    rand_bool,
]

spawner = GeneSpawner(                                      # gene spawner
    n_inputs=n_inputs,
    instruction_set=InstructionSet().register_core_by_stack(types),
    literals=literals,
    erc_generators=erc_generators,
)


'''Virus archive
'''
in_sol = [
    Genome([Input(input_index=0),
            InstructionMeta(name="str_length", code_blocks=0)]),
    Genome([Input(input_index=1),
            InstructionMeta(name="str_length", code_blocks=0)]),
    Genome([Input(input_index=2),
            InstructionMeta(name="str_length", code_blocks=0)]),
    Genome([InstructionMeta(name="int_lt", code_blocks=0)]),
    Genome([InstructionMeta(name="bool_and", code_blocks=0)]),
]
out_of_sol = [spawner.spawn_genome([2,5]) for _ in range(15)]
virus_spawner = VirusSpawner(viruses=in_sol + out_of_sol)


'''GP algorithm
'''
search = 'AVGA'                                             # search algorithm
variation = VariationPipeline([                             # variation method
    AdditionMutation(0.09),
    DeletionMutation(0.0826),
    ReplaceMutation(0.5)
])
population_size = 200                                       # population size
max_generations = 300                                       # max generations
parallelism = 10                                            # cpu core number
init_genome_size = (40, 200)                                # init genome length
max_genome_size = 1600                                      # max genome length
step_limit = 600                                            # max execute steps

est = PushEstimator(                                        # estimator
    search=search,
    population_size=population_size,
    max_generations=max_generations,
    initial_genome_size=init_genome_size,
    max_genome_size=max_genome_size,
    simplification_steps=500,
    spawner=spawner,
    virus_spawner=virus_spawner,
    variation_strategy=variation,
    last_str_from_stdout=last_str_from_stdout,
    parallelism=parallelism,
    verbose=2,
    push_config=PushConfig(step_limit=step_limit)
)


'''Main program
'''
if __name__ == '__main__':
    random.seed(seed); numpy.random.seed(seed)

    start_time = time.time()

    est.fit(X=train.X, y=train.Y)

    print('\tTest error:\n\t', est.score(X=test.X, y=test.Y).sum())

    print('\tTime:\n\t {}'.format(time.strftime(
        '%H:%M:%S', time.gmtime(time.time() - start_time
    ))))
