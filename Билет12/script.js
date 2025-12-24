// Коэффициенты перевода в метры (базовая единица)
const conversionRates = {
    km: 1000,    // 1 км = 1000 м
    m: 1,        // 1 м = 1 м
    cm: 0.01,    // 1 см = 0.01 м
    mm: 0.001    // 1 мм = 0.001 м
};

document.getElementById('convert').addEventListener('click', function() {
    const valueInput = document.getElementById('value').value.trim();
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('to').value;
    const resultDiv = document.getElementById('result');
    
    try {
        // Проверка на пустой ввод
        if (!valueInput) {
            throw new Error('Введите значение');
        }
        
        // Проверка на корректное число
        const value = parseFloat(valueInput);
        if (isNaN(value)) {
            throw new Error('Введите корректное число');
        }
        
        // Проверка на отрицательные значения (если нужно запретить)
        if (value < 0) {
            throw new Error('Число должно быть положительным');
        }
        
        // Конвертация: значение → метры → целевая единица
        const valueInMeters = value * conversionRates[fromUnit];
        const convertedValue = valueInMeters / conversionRates[toUnit];
        
        // Форматирование результата
        const fromText = document.getElementById('from').selectedOptions[0].text;
        const toText = document.getElementById('to').selectedOptions[0].text;
        
        resultDiv.innerHTML = `
            <strong>${value} ${fromText.split(' ')[0]}</strong> = 
            <strong style="color: #667eea;">${convertedValue.toFixed(6)} ${toText.split(' ')[0]}</strong>
        `;
        
    } catch (error) {
        resultDiv.innerHTML = `<span style="color: #e53e3e;">Ошибка: ${error.message}</span>`;
    }
});

// Разрешаем ввод только чисел и точки
document.getElementById('value').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^\d.]/g, '');
    
    // Запрещаем больше одной точки
    if ((this.value.match(/\./g) || []).length > 1) {
        this.value = this.value.slice(0, -1);
    }
});