from calculator import *
import pytest
import uuid

@pytest.mark.parametrize("a,b,expected", [
    (2,3,5),
    (0,0,0),
    (-1,1,0),
    (10,-5,5),
])

def test_add_with_params(a,b,expected):
    assert add(a,b) == expected


def test_subtract():
    """Тестируем функцию вычитания"""
    print("Запуск теста вычитания")
    result = subtract(5,3)
    assert result == 2, "Вычитание 5-3 должно быть 2"

def test_multiply():
    """Тестируем функцию умножения"""
    print("Запуск теста умножения")
    result = multiply(3,4)
    assert result == 12, "Умножение 3*4 должно быть 12"

def test_divide():
    """Тестируем функцию деления"""
    print("Запуск теста деления")
    result = divide(10,2)
    assert result == 5, "Деление 10/2 должно быть 5"


def test_divide_by_zero():
    """Тестируем обработку ошибки деления на ноль"""
    print("Запуск теста деления на ноль")
    #Проверяем что при делении на ноль возникает ошибка
    with pytest.raises(ValueError, match="На ноль делить нельзя"):
        divide(10,0)

#Фикстура
@pytest.fixture
def unique_id():
    id = uuid.uuid4()
    print(f"\nСгенерирован ID: {id}")
    return id

# Тест с фикстурой
def test_with_fixture(unique_id):
    print(f"Используется ID: {unique_id}")
    assert isinstance(unique_id, uuid.UUID)