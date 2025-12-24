import pytest

def test_multiply():
    assert 3 * 4 == 12

def test_divide():
    assert 15 / 3 == 5

@pytest.mark.slow
def test_complex_calculation():
    # Имитация долгого теста
    import time
    time.sleep(0.5)
    assert 100 * 100 == 10000