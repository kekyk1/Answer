// Находим элементы DOM
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const resultBox = document.getElementById('resultBox');

// Функция расчета ИМТ
function calculateBMI() {
    // Получаем значения из полей ввода
    const heightCm = parseFloat(heightInput.value);
    const weightKg = parseFloat(weightInput.value);
    
    // Проверка на корректность данных
    if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
        resultBox.innerHTML = '<p style="color: #e53e3e;">Пожалуйста, введите корректные значения роста и веса</p>';
        return;
    }
    
    // Конвертируем рост в метры
    const heightM = heightCm / 100;
    
    // Формула ИМТ: вес (кг) / (рост (м) * рост (м))
    const bmi = weightKg / (heightM * heightM);
    
    // Округляем до 1 знака после запятой
    const roundedBMI = bmi.toFixed(1);
    
    // Отображаем результат
    resultBox.innerHTML = `
        <div>
            <p style="font-size: 16px; color: #718096; margin-bottom: 5px;">Ваш индекс массы тела:</p>
            <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${roundedBMI}</p>
        </div>
    `;
}

// Обработчик клика на кнопку
calculateBtn.addEventListener('click', calculateBMI);

// Обработчик нажатия Enter в полях ввода
heightInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
});

weightInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
});

// Инициализация при загрузке
resultBox.innerHTML = '<p>Введите данные для расчета</p>';