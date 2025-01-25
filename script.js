document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Load tasks from Local Storage
    function loadTasks() {
        // Get the stored tasks from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Loop through the stored tasks and add them to the task list
        storedTasks.forEach(task => {
            addTask(task.text, false); // 'false' means do not save again to Local Storage when loading
        });
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Create a task object with text and a unique id
        const task = { text: taskText, id: Date.now() };

        // Create the list item <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content to the task text

        // Create the "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Button text

        // Add the 'remove-btn' class using classList.add()
        removeButton.classList.add('remove-btn'); // Using classList.add to add the class

        // Add event listener to the remove button
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem); // Remove task from DOM
            removeTaskFromStorage(task.id); // Remove the task from Local Storage
        });

        // Append the "Remove" button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Save the task to Local Storage if required
        if (save) {
            saveTaskToStorage(task);
        }

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Function to save task to Local Storage
    function saveTaskToStorage(task) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(task); // Add new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated tasks to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskId) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task.id !== taskId); // Remove task by ID
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage with the new list
    }

    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim(); // Get task text from input field
        if (taskText !== "") {
            addTask(taskText); // Add task and save to Local Storage
        } else {
            alert("Please enter a task!"); // Alert if the input is empty
        }
    });

    // Event listener for the "Enter" key press to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // If "Enter" is pressed
            const taskText = taskInput.value.trim(); // Get task text from input field
            if (taskText !== "") {
                addTask(taskText); // Add task and save to Local Storage
            } else {
                alert("Please enter a task!"); // Alert if the input is empty
            }
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
