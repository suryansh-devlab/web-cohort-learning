const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItems = document.getElementById("todo-items-container");
const clear = document.getElementById("clear");

addBtn.addEventListener("click", () => {
  const value = todoInput.value;

  const li = document.createElement("li");
  li.innerText = value;

  const delButton = document.createElement("button");
  delButton.innerText = "❌";
  delButton.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(delButton);

  todoItems.appendChild(li);
  todoInput.value = " ";

  clear.addEventListener("click", () => {
    li.remove();
  });
});
