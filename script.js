const inputField = document.getElementById("input");
const todoList = document.getElementById("todos");

function addTask(taskText) {
  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Create a button to edit the task
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
    const updatedText = prompt("Edit the task:", taskSpan.textContent);
    if (updatedText !== null) {
      taskSpan.textContent = updatedText;
    }
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  listItem.classList.add("todo-item");

  todoList.appendChild(listItem);
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const todoText = inputField.value.trim();
  if (todoText !== "") {
    addTask(todoText);
    inputField.value = "";
  }
});
