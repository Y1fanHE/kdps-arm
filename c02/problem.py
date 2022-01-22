'''
Author: He,Yifan
Date: 2022-01-01 10:53:36
LastEditors: He,Yifan
LastEditTime: 2022-01-04 16:06:14
'''
import random
from pyshgp.push.types import IntVector


def target_function(v):
    a, b, c = v
    median = max(min(max(a,b), c), min(a,b))
    return bool(median % 2)

def get_vector():
    vec = [random.randint(-1000, 1000) for _ in range(3)]
    return IntVector(vec)

def get_train_inputs(seed=None):
    if seed:
        random.seed(seed)
    inputs = [[get_vector()] for _ in range(100)]
    return inputs

def get_test_inputs(seed=None):
    if seed:
        random.seed(seed)
    inputs = [[get_vector()] for _ in range(1000)]
    return inputs

def get_outputs(inputs):
    out = [[target_function(*x)] for x in inputs]
    return out
