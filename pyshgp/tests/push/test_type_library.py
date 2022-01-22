import pytest

from pyshgp.push.type_library import PushTypeLibrary, infer_literal
from pyshgp.push.atoms import Literal
from pyshgp.push.types import PushChar, PushInt, PushBool, PushStr, Char, CORE_PUSH_TYPES


ALL_CORE_TYPE_NAMES = set([t.name for t in CORE_PUSH_TYPES]) | {"exec", "code"}


class TestPushTypeLibrary:

    def test_register(self):
        lib = PushTypeLibrary(register_core=False)
        lib.register(PushChar)
        assert set(lib.keys()) == {"char", "exec", "code"}
        assert lib["char"] == PushChar

    def test_create_and_register(self):
        lib = PushTypeLibrary(register_core=False)
        lib.create_and_register("data", (list, tuple))
        assert set(lib.keys()) == {"data", "exec", "code"}
        new_type = lib["data"]
        assert new_type.is_instance((1, 2, 3))
        assert new_type.is_instance([1, 2, 3])

    def test_register_duplicates(self):
        lib = PushTypeLibrary(register_core=False)
        lib.create_and_register("char", (int, ))
        lib.register(PushChar)
        assert set(lib.keys()) == {"char", "exec", "code"}
        assert lib["char"] == PushChar

    def test_register_reserved(self):
        lib = PushTypeLibrary(register_core=False)
        with pytest.raises(ValueError):
            lib.create_and_register("stdout", (list, ))

    def test_unregister(self):
        lib = PushTypeLibrary()
        lib.unregister("char")
        lib.unregister("float")
        assert set(lib.keys()) == ALL_CORE_TYPE_NAMES - {"char", "float"}

    def test_unregister_reserved(self):
        lib = PushTypeLibrary()
        with pytest.raises(ValueError):
            lib.unregister("untyped")

    def test_register_core(self):
        lib = PushTypeLibrary()
        assert set(lib.keys()) == ALL_CORE_TYPE_NAMES
        assert lib["char"] == PushChar
        assert lib["int"] == PushInt

    def test_supported_stacks(self):
        lib = PushTypeLibrary()
        assert lib.supported_stacks() == ALL_CORE_TYPE_NAMES

    def test_push_type_of(self):
        lib = PushTypeLibrary()
        assert lib.push_type_of(7) == PushInt
        assert lib.push_type_of(True) == PushBool
        assert lib.push_type_of("ABC") == PushStr
        assert lib.push_type_of(Char("Z")) == PushChar

    def test_push_type_for_type(self):
        lib = PushTypeLibrary()
        assert lib.push_type_for_type(int) == PushInt
        assert lib.push_type_for_type(bool) == PushBool
        assert lib.push_type_for_type(str) == PushStr
        assert lib.push_type_for_type(Char) == PushChar


def test_infer_literal():
    lib = PushTypeLibrary()
    assert infer_literal(5, lib) == Literal(value=5, push_type=PushInt)
    assert infer_literal(False, lib) == Literal(value=False, push_type=PushBool)
    assert infer_literal("", lib) == Literal(value="", push_type=PushStr)
