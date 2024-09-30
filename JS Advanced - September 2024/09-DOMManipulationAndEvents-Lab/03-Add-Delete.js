function addDelete() {
  const list = document.getElementById("items");
  const input = document.getElementById("newItemText");

  const text = input.value;

  if (!text) {
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = text;

  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  deleteBtn.addEventListener("click", onClick);

  newItem.appendChild(deleteBtn);
  list.appendChild(newItem);
  input.value = "";

  function onClick(e) {
    const btn = e.target;
    btn.parentElement.remove();
  }
}