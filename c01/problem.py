'''
Author: He,Yifan
Date: 2021-12-30 11:43:25
LastEditors: He,Yifan
LastEditTime: 2022-01-01 10:53:54
'''
import random, string


def target_function(x):
    l = len(x)
    if l < 1000:
        return 'small'
    elif l >= 2000:
        return 'large'
    else:
        return ''

def get_str(length=None):
    source = string.ascii_letters+string.digits+string.punctuation
    if not length:
        length = random.randint(0, 3000)
    chars = [random.choice(source) for _ in range(length)]
    return ''.join(chars)

def get_train_inputs(seed=None):
    if seed:
        random.seed(seed)
    edge_lengths = [0]+list(range(995, 1006))+list(range(1995, 2006))+[3000]
    edge_cases = [[get_str(edge_length)] for edge_length in edge_lengths]
    rand_cases = [[get_str()] for _ in range(100-len(edge_cases))]
    return edge_cases + rand_cases

def get_test_inputs(seed=None):
    if seed:
        random.seed(seed)
    rand_cases = [[get_str()] for _ in range(1000)]
    return rand_cases

def get_outputs(inputs):
    out = [[target_function(*x)] for x in inputs]
    return out
