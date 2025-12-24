from calculations import calculate_average, find_max, process_data, safe_division
import pytest

def test_calculate_average():
    assert calculate_average([1, 2, 3]) == 2.0
    with pytest.raises(ZeroDivisionError):
        calculate_average([])  # ОШИБКА 1

def test_find_max():
    assert find_max([1, 5, 3]) == 5
    with pytest.raises(IndexError):
        find_max([])  # ОШИБКА 2

def test_process_data():
    # Функция возвращает не список, а число
    result = process_data([1, 2, 3])
    assert result == 16  # ОШИБКА 3

def test_safe_division():
    assert safe_division(10, 2) == 5.0
    assert safe_division(10, 0) is None  # ОШИБКА 4

# Запуск: python -m pytest test_file.py