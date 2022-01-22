import pandas as pd
import pytest
import numpy as np

from pyshgp.gp.evaluation import (
    damerau_levenshtein_distance, DatasetEvaluator, FunctionEvaluator
)
from pyshgp.utils import Token


def test_levenshtein_distance_str():
    assert damerau_levenshtein_distance("abcde", "abcxyz") == 3


def test_levenshtein_distance_seq():
    assert damerau_levenshtein_distance([3, 2, 1], [1, 2, 3]) == 2


class TestDatasetEvaluator:

    def test_default_error_function(self):
        evaluator = DatasetEvaluator([], [])
        assert np.all(np.equal(
            evaluator.default_error_function(
                [Token.no_stack_item, True, 1, 2.3, "456", [7, 8]],
                ["a stack item", False, 3, 6.3, "abc", [5, 11]]),
            np.array([evaluator.penalty, 1, 2, 4.0, 3, 2, 3])
        ))

    def test_dataset_evaluate_simple(self, simple_program):
        evaluator = DatasetEvaluator(
            [[1], [2], [3]],
            [10, 5, 10]
        )
        assert np.all(np.equal(
            evaluator.evaluate(simple_program),
            np.array([0, 5, 0])
        ))

    def test_data_evaluator_simple_pandas(self, simple_program):
        df_x = pd.DataFrame({"x": [1, 2, 3]})
        df_y = pd.DataFrame({"y": [10, 5, 10]})
        evaluator = DatasetEvaluator(df_x, df_y)
        assert np.all(np.equal(
            evaluator.evaluate(simple_program),
            np.array([0, 5, 0])
        ))


class TestFunctionEvaluator:

    def test_function_evaluate(self, simple_program):
        evaluator = FunctionEvaluator(lambda prog: np.array([1, 2, 3]))
        assert np.all(np.equal(
            evaluator.evaluate(simple_program),
            np.array([1, 2, 3])
        ))
