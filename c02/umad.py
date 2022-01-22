'''
Author: He,Yifan
Date: 2021-12-04 17:54:58
LastEditors: He,Yifan
LastEditTime: 2022-01-04 16:07:12
'''
import random, time, sys, numpy
from pyshgp.gp.estimators import PushEstimator
from pyshgp.gp.genome import GeneSpawner
from pyshgp.push.config import PushConfig
from pyshgp.push.instruction_set import InstructionSet
from pyshgp.push.types import IntVector
from problem import get_train_inputs, get_test_inputs, get_outputs
seed = int(sys.argv[1])                                     # random seed


'''Train/Test data
'''
train_inputs = get_train_inputs(seed=seed)                  # create train data
train_outputs = get_outputs(train_inputs)
test_inputs = get_test_inputs(seed=seed)                    # create test data
test_outputs = get_outputs(test_inputs)


'''Primitives
'''
n_inputs = 1                                                # number of inputs
last_str_from_stdout = False                                # no print string
types = {                                                   # primitive types
    'exec', 'int', 'bool', 'vector_int'
}

literals = [0, 1, 2]                                        # literals

def rand_int():
    return random.randint(-1000, 1000)

erc_generators = [                                          # erc generators
    rand_int
]

spawner = GeneSpawner(                                      # gene spawner
    n_inputs=n_inputs,
    instruction_set=InstructionSet().register_core_by_stack(types),
    literals=literals,
    erc_generators=erc_generators,
)


'''GP Algorithm
'''
search = 'GA'                                               # search algorithm
variation = 'umad'                                          # variation method
population_size = 200                                       # population size
max_generations = 300                                       # max generations
parallelism = 25                                            # cpu core number
init_genome_size = (50, 250)                                # init genome length
max_genome_size = 2000                                      # max genome length
step_limit = 1500                                           # max execute steps

est = PushEstimator(                                        # estimator
    search=search,
    population_size=population_size,
    max_generations=max_generations,
    initial_genome_size=init_genome_size,
    max_genome_size=max_genome_size,
    simplification_steps=500,
    spawner=spawner,
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

    est.fit(X=train_inputs, y=train_outputs)

    print('\tTest error:\n\t', est.score(X=test_inputs, y=test_outputs).sum())

    print('\tTime:\n\t {}'.format(time.strftime(
        '%H:%M:%S', time.gmtime(time.time() - start_time
    ))))
