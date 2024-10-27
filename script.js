// To-Do List Functionality
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const newTodo = document.createElement('li');
    newTodo.className = 'to-do-item';
    newTodo.innerHTML = `${todoInput.value} <button onclick="removeTodo(this)">Delete</button>`;
    todoList.appendChild(newTodo);
    todoInput.value = '';
}

function removeTodo(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}

// untuk mengubah warna latar belakang
function changeBgColor() {
    const color = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = color;
}

// untuk mengubah ukuran font
function changeFontSize() {
    const fontSize = document.getElementById('fontSize').value + 'px';
    document.body.style.fontSize = fontSize;
}

// untuk mengubah gaya font
function changeFontStyle() {
    const fontStyle = document.getElementById('fontStyle').value;
    document.body.style.fontFamily = fontStyle;
}

// Dark Mode Toggle
let isDarkMode = false;
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
}