// script.js
importScripts("https://progressier.app/J0eorzHeUn31BrbfAQ7R/sw.js" );
let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Initial render
renderTasks();
