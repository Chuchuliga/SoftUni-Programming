function fillDropdown() {
  const textElement = document.getElementById("newItemText");
  const valueElement = document.getElementById("newItemValue");

  const optionElement = document.createElement("option");
  const menu = document.getElementById("menu");

  if (textElement.value !== "" && valueElement.value !== "") {
    optionElement.textContent = textElement.value;
    optionElement.value = valueElement.value;

    menu.appendChild(optionElement);

    textElement.value = "";
    valueElement.value = "";
  }
}