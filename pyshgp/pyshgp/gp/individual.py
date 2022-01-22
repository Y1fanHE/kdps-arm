"""The :mod:`individual` module defines an Individual in an evolutionary population.

Individuals are made up of Genomes, which are the linear Push program
representations which can be manipulated by search algorithms.

"""
from typing import Union
from uuid import uuid4

import numpy as np

from pyshgp.gp.genome import Genome, genome_to_code
from pyshgp.push.program import Program, ProgramSignature
from pyshgp.utils import Saveable, Copyable


class Individual(Saveable, Copyable):
    """An individual in an evolutionary population.

    Attributes
    ----------
    genome : Genome
        The Genome of the Individual.
    error_vector : np.array
        An array of error values produced by evaluating the Individual's program.
    total_error : float
        The sum of all error values in the Individual's error_vector.
    error_vector_bytes:
        Hashable Byte representation of the Individual's error vector.

    """

    __slots__ = [
        "id", "genome", "signature",
        "virus_index", "virus_from_success_index", "_parent_error_vector",
        "_program", "_error_vector", "_total_error", "_error_vector_bytes"
    ]

    def __init__(self, genome: Genome, signature: ProgramSignature,
                 virus_index: int = None, parent_error_vector = [],
                 virus_from_success_index: bool = False):
        self.id = uuid4()
        self.genome = genome
        self.signature = signature
        self.virus_index = virus_index
        self.virus_from_success_index = virus_from_success_index
        self._parent_error_vector = parent_error_vector
        self._program = None
        self._error_vector = None
        self._total_error = None
        self._error_vector_bytes = None

    @property
    def is_improved(self):
        if self._parent_error_vector == []:
            return False
        parent_success_count = np.count_nonzero(self._parent_error_vector==0)
        success_count = np.count_nonzero(self._error_vector==0)
        return success_count > parent_success_count

    @property
    def program(self) -> Program:
        """Push program associated with this Individual. Taken from Plush genome."""
        if self._program is None:
            cb = genome_to_code(self.genome)
            self._program = Program(code=cb, signature=self.signature)
        return self._program

    @property
    def error_vector(self) -> np.ndarray:
        """Numpy array of numeric error values."""
        return self._error_vector

    @error_vector.setter
    def error_vector(self, error_vector: np.ndarray):
        self._error_vector = error_vector

    @property
    def total_error(self) -> Union[np.int64, np.float64]:
        """Numeric sum of the error vector."""
        if self._total_error is None:
            try:
                self._total_error = np.sum(self.error_vector)
            except OverflowError:
                self._total_error = np.inf
        return self._total_error

    @total_error.setter
    def total_error(self, value: Union[np.int64, np.float64]):
        raise AttributeError("Cannot set total_error directly. Must set error_vector.")

    @property
    def error_vector_bytes(self):
        """Hashable Byte representation of the Individual's error vector."""
        if self._error_vector_bytes is None:
            self._error_vector_bytes = self._error_vector.data.tobytes()
        return self._error_vector_bytes

    @error_vector_bytes.setter
    def error_vector_bytes(self, value):
        raise AttributeError("Cannot set error_vector_bytes directly. Must set error_vector.")

    def __lt__(self, other):
        return self.total_error < other.total_error

    def __eq__(self, other):
        return isinstance(other, Individual) and self.genome == other.genome
