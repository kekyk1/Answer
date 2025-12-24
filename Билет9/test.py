import pytest
from password_checker import validate_password

@pytest.mark.parametrize("password,expected,test_name", [
    ("ValidPass123", True, "Валидный"),
    ("short1A", False, "Короткий"),
    ("NoDigitsHere", False, "Без цифр"),
    ("nouppercase123", False, "Без заглавных"),
    ("NOLOWERCASE123", False, "Без строчных"),
    ("", False, "Пустая строка"),
    ("A1b!@#$%", True, "Со спецсимволами"),
    #Таким же способом дописать тесты пограничных значиний
])

def test_validate_password(password, expected, test_name):
    result = validate_password(password)
    assert result == expected, f"Тест '{test_name}' не пройден: password={password}"