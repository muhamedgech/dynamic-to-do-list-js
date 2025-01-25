document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the task text

        // Validate if the task text is empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert the user to enter a task if the input is empty
            return;
        }

        // Create the list item <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content to the task text

        // Create the "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Button text

        // Add the 'remove-btn' class using classList.add()
        removeButton.classList.add('remove-btn'); // Using classList.add to add the class

        // Attach an event listener to the remove button
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem); // Remove the task from the list
        });

        // Append the "Remove" button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', addTask);

    // Event listener for the "Enter" key press to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // If "Enter" is pressed
            addTask(); // Call the addTask function
        }
    });
});
