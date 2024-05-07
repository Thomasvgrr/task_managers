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

// Fonction pour exporter les tâches au format CSV
function exportToCSV() {
    const tasks = [];
    const taskItems = document.querySelectorAll('#taskList li');
    taskItems.forEach((taskItem) => {
      const [title, description] = taskItem.textContent.split(' - ');
      tasks.push([title, description]);
    });
  
    const csvContent = tasks.map((task) => task.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'tasks.csv');
    document.body.appendChild(link);
    link.click();
  }
  
  // Événement pour déclencher l'exportation vers CSV
  document.getElementById('exportCSV').addEventListener('click', exportToCSV);