function sections(words) {
  const content = document.getElementById("content");

  for (const el of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = el;
    p.style.display = "none";

    div.appendChild(p);
    content.appendChild(div);
  }

  content.addEventListener("click", onClick);

  function onClick(event) {
    if (event.target.tagName == "DIV" && event.target != content) {
      event.target.children[0].style.display = "block";
    }
  }
}