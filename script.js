document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        // Retrieve the task text from the input field and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert the user if the input field is empty
            return;
        }

        // Create a new list item for the task
        const listItem = document.createElement('li'); // Create <li> element
        listItem.textContent = taskText;              // Set its text content to taskText

        // Create a remove button
        const removeButton = document.createElement('button'); // Create <button> element
        removeButton.textContent = 'Remove';                   // Set its text to "Remove"
        removeButton.className = 'remove-btn';                 // Assign the class 'remove-btn'

        // Add an event listener to the remove button to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the <li> element from the list
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener for the "Enter" key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if "Enter" key is pressed
        }
    });
});
