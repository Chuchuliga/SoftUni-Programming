function highightActive() {
  const input = document.getElementsByTagName("input");
  const fields = Array.from(input);

  for (const el of fields) {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
  }

  function onFocus(event) {
    event.target.parentNode.classList.add("focused");
  }

  function onBlur(event) {
    event.target.parentNode.classList.remove("focused");
  }
}