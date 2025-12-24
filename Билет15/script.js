// Переменные таймера
let totalSeconds = 5 * 60; // 5 минут по умолчанию
let timerInterval = null;
let isRunning = false;

// Элементы DOM
const timeDisplay = document.getElementById('timeDisplay');
const minutesInput = document.getElementById('minutesInput');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const status = document.getElementById('status');

// Функция обновления дисплея
function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    timeDisplay.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Функция запуска таймера
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    status.textContent = 'Таймер запущен';
    
    // Обновляем кнопки
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    minutesInput.disabled = true;
    
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
            
            if (totalSeconds === 0) {
                stopTimer();
                status.textContent = 'Время вышло!';
                // Можно добавить звуковой сигнал
                // new Audio('beep.mp3').play();
            }
        }
    }, 1000);
}

// Функция остановки таймера
function pauseTimer() {
    if (!isRunning) return;
    
    clearInterval(timerInterval);
    isRunning = false;
    status.textContent = 'Таймер на паузе';
    
    // Обновляем кнопки
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Функция сброса таймера
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    
    // Сбрасываем время из input
    const minutes = parseInt(minutesInput.value) || 5;
    totalSeconds = minutes * 60;
    
    status.textContent = 'Готов';
    
    // Обновляем кнопки
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    minutesInput.disabled = false;
    
    updateDisplay();
}

// Обработчики событий
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Обновление времени при изменении input
minutesInput.addEventListener('change', function() {
    const minutes = parseInt(this.value) || 1;
    
    if (minutes < 1) minutes = 1;
    if (minutes > 60) minutes = 60;
    
    this.value = minutes;
    
    if (!isRunning) {
        totalSeconds = minutes * 60;
        updateDisplay();
    }
});

// Обработка Enter в input
minutesInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        resetTimer();
        startTimer();
    }
});

// Инициализация при загрузке
updateDisplay();