let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const inputBox = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-btn");


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">❌</button>
        `;

        taskList.appendChild(li);
    });
}


function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(taskText);
    saveTasks();
    renderTasks();

    inputBox.value = "";
}


function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}


addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});


renderTasks();
