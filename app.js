let list = document.getElementById("todoList");

function addTodo() {
  let input = document.getElementById("todoInput");
  if (!input.value) return;

  let li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
}
