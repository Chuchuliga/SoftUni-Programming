function deleteFromTable() {
  const input = document.querySelector('[name="email"]');
  const rows = document.querySelectorAll("#customers tbody tr");
  const result = document.getElementById("result");

  const pattern = input.value.toLocaleLowerCase();

  if (!pattern) {
    return;
  }
  let found = false;

  for (let row of rows) {
    const email = row.children[1];
    if (email.textContent.toLocaleLowerCase().includes(pattern)) {
      email.remove();
      found = true;
    }
  }

  input.value = "";

  if (found) {
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}