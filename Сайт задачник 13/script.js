let tasks = [];
let taskId = 1;

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');

// Функция рендеринга задач
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.isCompleted ? 'checked' : ''} data-id="${task.id}">
            <span class="task-text ${task.isCompleted ? 'task-completed' : ''}">${task.text}</span>
            <button class="delete-btn" data-id="${task.id}">×</button>
        `;
        taskList.appendChild(li);
    });
    
    // Обновление статистики
    const total = tasks.length;
    const completed = tasks.filter(task => task.isCompleted).length;
    
    totalCount.textContent = total;
    completedCount.textContent = completed;
}

// Добавление задачи
addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    
    if (text === '') {
        alert('Введите текст задачи');
        return;
    }
    
    tasks.push({
        id: taskId++,
        text: text,
        isCompleted: false
    });
    
    taskInput.value = '';
    renderTasks();
});

// Ввод по Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

// Делегирование событий для чекбоксов и кнопок удаления
taskList.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.id);
    
    if (e.target.classList.contains('task-checkbox')) {
        // Изменение статуса задачи
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.isCompleted = e.target.checked;
            renderTasks();
        }
    }
    
    if (e.target.classList.contains('delete-btn')) {
        // Удаление задачи
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    }
});

// Инициализация
renderTasks();