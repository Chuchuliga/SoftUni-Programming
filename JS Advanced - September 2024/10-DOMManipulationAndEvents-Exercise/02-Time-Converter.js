function timeConventer() {
  const btns = Array.from(document.querySelectorAll('[type="button"]'));

  btns.forEach((x) => x.addEventListener("click", onClick));

  function onClick(event) {
    const timeType = event.target.parentNode.children[1].id;
    const value = Number(event.target.parentNode.children[1].value);

    let seconds = 0;

    if (timeType == "days") {
      seconds = value * 24 * 60 * 60;
    } else if (timeType == "hours") {
      seconds = value * 60 * 60;
    } else if (timeType == "minutes") {
      seconds = value * 60;
    } else if (timeType == "seconds") {
      seconds = value;
    }

    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    document.querySelector("#days").value = days;
    document.querySelector("#hours").value = hours;
    document.querySelector("#minutes").value = minutes;
    document.querySelector("#seconds").value = seconds;
  }
}
