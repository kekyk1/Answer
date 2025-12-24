"""
Модуль с функциями для математических вычислений.
Содержит преднамеренные ошибки для отладки.
"""
def calculate_average(numbers):
    """
    Вычисляет среднее арифметическое списка чисел.
    
    Args:
        numbers (list): Список чисел
        
    Returns:
        float: Среднее значение
    """
    total = 0
    for num in numbers:
        total += num
    average = total / len(numbers)  # ОШИБКА 1: Не обрабатывает пустой список
    return average


def find_max(numbers):
    """
    Находит максимальное значение в списке.
    
    Args:
        numbers (list): Список чисел
        
    Returns:
        int/float: Максимальное значение
    """
    max_num = numbers[0]  # ОШИБКА 2: Падение при пустом списке
    for i in range(len(numbers)):
        if numbers[i] > max_num:
            max_num = numbers[i]
    return max_num


def process_data(data):
    """
    Обрабатывает данные по формуле: item * 2 + 10
    
    Args:
        data (list): Входные данные
        
    Returns:
        list: Обработанные данные
    """
    result = []
    for item in data:
        processed = item * 2 + 10
        result = processed  # ОШИБКА 3: Не добавляет в список правильно
    return result


def safe_division(a, b):
    """
    Выполняет безопасное деление двух чисел.
    
    Args:
        a (float): Делимое
        b (float): Делитель
        
    Returns:
        float: Результат деления
    """
    if b == 0:
        return  # ОШИБКА 4: Возвращает None вместо обработки ошибки
    return a / b


def complex_operation(values):
    """
    Сложная операция: сумма элементов, деленная на количество,
    затем каждый элемент умножается на результат.
    
    Args:
        values (list): Список значений
        
    Returns:
        list: Результаты вычислений
    """
    sum = 0
    for i in values:
        sum =+ i  # ОШИБКА 5: Неправильный оператор
    
    avg = sum / len(values)
    
    result = []
    for j in range(len(values) + 1):  # ОШИБКА 6: Выход за границы списка
        result.append(values[j] * avg)
    
    return result