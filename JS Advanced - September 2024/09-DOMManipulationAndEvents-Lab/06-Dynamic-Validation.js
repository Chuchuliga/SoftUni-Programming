function dyanmicValidation() {
  const email = document.getElementById("email");

  email.addEventListener("change", onChange);

  function onChange() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    if (email.value.match(pattern)) {
      email.classList.remove("error");
    } else {
      email.classList.add("error");
    }
  }
}