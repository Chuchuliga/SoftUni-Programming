function lockedProfile() {
  const btns = Array.from(document.querySelectorAll(".profile button"));

  for (let el of btns) {
    el.addEventListener("click", onClick);
  }

  function onClick(event) {
    const btn = event.target;
    const profile = btn.parentNode;
    const hiddenInfo = profile.querySelector("div");
    const isActive = profile.querySelector(
      'input[type="radio"][value="unlock"]'
    ).checked;

    if (isActive) {
      if (btn.textContent === "Show more") {
        hiddenInfo.style.display = "block";
        btn.textContent = "Hide it";
      } else {
        hiddenInfo.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }
}