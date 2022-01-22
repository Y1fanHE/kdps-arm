'''
Author: He,Yifan
Date: 2021-09-06 15:23:33
LastEditors: He,Yifan
LastEditTime: 2021-12-04 19:25:41
'''
import yaml, random
from collections import namedtuple


def load_edge_cases(benchmark, edge_case_num, root='benchmarks'):
    '''Load edge cases from example I/O
    '''
    if edge_case_num == 0:
        return []
    # read edge cases
    with open(f'{root}/{benchmark}/{benchmark}-edge.json', 'r') as data_file:
        dataset = data_file.readlines() # read all data item
        idx = list(range(len(dataset))) # get indices of data item
        random.shuffle(idx)             # shuffle
        edge_case_num = min(            # case number cannot exceed maximum
            edge_case_num, len(idx)
        )
        idx = idx[:edge_case_num]       # get first edge_case_num data items
        edge_cases = [                  # load json data
            yaml.safe_load(dataset[i]) for i in idx
        ]
    return edge_cases

def load_rand_cases(benchmark, rand_case_num, root='benchmarks'):
    '''Load random cases from example I/O
    '''
    if rand_case_num == 0:
        return []
    # read random cases
    with open(f'{root}/{benchmark}/{benchmark}-random.json', 'r') as data_file:
        dataset = data_file.readlines() # read all data item
        idx = list(range(len(dataset))) # get indices of data item
        random.shuffle(idx)             # shuffle
        rand_case_num = min(            # case number cannot exceed maximum
            rand_case_num, len(idx)
        )
        idx = idx[:rand_case_num]       # get first edge_case_num data items
        rand_cases = [                  # load json data
            yaml.safe_load(dataset[i]) for i in idx
        ]
    return rand_cases

def create_data(benchmark, edge, rand, root, input_types=[], output_types=[], seed=None):
    '''Create train/test dataset from example I/O
    '''
    if seed != None:
        random.seed(seed)
    data = []
    edge_cases = load_edge_cases(benchmark, edge, root)
    data.extend(edge_cases)
    print(f'Included {len(edge_cases)} edge cases.')
    rand_cases = load_rand_cases(benchmark, rand, root)
    data.extend(rand_cases)
    print(f'Included {len(rand_cases)} random cases.')
    random.shuffle(data)
    print(f'Included {len(data)} cases in total.')
    Data = namedtuple('Data', ['X', 'Y'])
    X, Y = [], []
    for data_item in data:
        x, y = [], []
        input_idx = 0
        output_idx = 0
        for key, value in data_item.items():
            if 'input' in key:
                if len(input_types) != 0:
                    value = input_types[input_idx](value)
                x.append(value)
                input_idx += 1
            if 'output' in key:
                if len(output_types) != 0:
                    value = output_types[output_idx](value)
                y.append(value)
                output_idx += 1
        X.append(x)
        Y.append(y)
    print('Finished formatting.')
    return Data(X, Y)
