function mouseGradient() {
  const result = document.getElementById("result");
  const box = document.getElementById("gradient");
  box.addEventListener("mousemove", onMove);

  function onMove(event) {
    const offset = Math.floor((event.offsetX / box.clientWidth) * 100) + "%";
    result.textContent = offset;
  }
}