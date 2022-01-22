import pytest
import random
from math import pow, sqrt

from pyshgp.gp.individual import Individual

from pyshgp.push.config import PushConfig
from pyshgp.push.type_library import PushTypeLibrary
from pyshgp.push.types import PushInt, PushBool, PushFloat, PushStr, PushType
from pyshgp.push.instruction_set import InstructionSet
from pyshgp.push.instruction import SimpleInstruction
from pyshgp.push.atoms import Closer, Literal
from pyshgp.push.interpreter import PushInterpreter
from pyshgp.push.program import ProgramSignature, Program
from pyshgp.push.state import PushState
from pyshgp.gp.genome import Genome, GeneSpawner, genome_to_code


@pytest.fixture(scope="session")
def push_config():
    return PushConfig()


@pytest.fixture(scope="session")
def core_type_lib():
    return PushTypeLibrary(register_core=True)


@pytest.fixture(scope="session")
def instr_set():
    return InstructionSet(register_core=True)


@pytest.fixture(scope="function")
def atoms(instr_set):
    return {
        "5": Literal(value=5, push_type=PushInt),
        "1.2": Literal(value=1.2, push_type=PushFloat),
        "true": Literal(value=True, push_type=PushBool),
        "add": instr_set["int_add"].meta(),
        "sub": instr_set["int_sub"].meta(),
        "if": instr_set["exec_if"].meta(),
        "close": Closer()
    }


@pytest.fixture(scope="function")
def state(push_config):
    return PushState(PushTypeLibrary(PushInt, PushBool, PushFloat, PushStr), push_config)


@pytest.fixture(scope="function")
def interpreter():
    return PushInterpreter()


@pytest.fixture(scope="function")
def simple_genome(atoms):
    return Genome([atoms["5"], atoms["5"], atoms["add"]])


@pytest.fixture(scope="function")
def simple_program_signature(push_config):
    return ProgramSignature(arity=1, output_stacks=["int"], push_config=push_config)


@pytest.fixture(scope="function")
def simple_program(simple_genome, simple_program_signature):
    return Program(code=genome_to_code(simple_genome), signature=simple_program_signature)


@pytest.fixture(scope="function")
def simple_individual(simple_genome, simple_program_signature):
    return Individual(simple_genome, simple_program_signature)


@pytest.fixture(scope="function")
def simple_gene_spawner(instr_set):
    i_set = InstructionSet()
    i_set.register_list([instr_set["int_add"], instr_set["int_sub"], instr_set["exec_if"]])
    l_set = [5, 1.2, True]
    return GeneSpawner(1, i_set, l_set, [random.random])


# Custom Types

class Point:

    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __eq__(self, other):
        if isinstance(other, Point):
            return self.x == other.x and self.y == other.y
        return False


class PointType(PushType):

    def __init__(self):
        super().__init__("point", (Point,))

    # override
    def coerce(self, value):
        return Point(float(value[0]), float(value[1]))


@pytest.fixture(scope="session")
def point_cls():
    return Point


@pytest.fixture(scope="session")
def point_type():
    return PointType()


def point_distance(p1, p2):
    delta_x = p2.x - p1.x
    delta_y = p2.y - p1.y
    return sqrt(pow(delta_x, 2.0) + pow(delta_y, 2.0)),


def point_from_floats(f1, f2):
    return Point(f1, f2),


@pytest.fixture(scope="session")
def point_instructions():
    return [
        SimpleInstruction("point_dist", point_distance, ["point", "point"], ["float"], 0),
        SimpleInstruction("point_from_floats", point_from_floats, ["float", "float"], ["point"], 0),
    ]


@pytest.fixture(scope="session")
def point_type_library(point_type):
    return (
        PushTypeLibrary(register_core=False)
        .register(PushFloat)
        .register(point_type)
    )


@pytest.fixture(scope="session")
def point_instr_set(point_type_library, point_instructions):
    return (
        InstructionSet(type_library=point_type_library, register_core=True)
        .register_list(point_instructions)
    )
