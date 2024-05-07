const btnAddTask = document.getElementById('btnAddTask');
const taskModal = document.getElementById('taskModal');
const closeModal = document.querySelector('.close');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Événement pour ouvrir la fenêtre modale d'ajout de tâche
btnAddTask.addEventListener('click', () => {
  taskModal.style.display = 'block';
});

// Événement pour fermer la fenêtre modale
closeModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

// Événement pour ajouter une tâche
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  if (taskTitle.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = `${taskTitle} - ${taskDescription}`;
    taskList.appendChild(li);
    taskModal.style.display = 'none';
    taskForm.reset();
  } else {
    alert('Veuillez saisir un titre pour la tâche.');
  }
});
