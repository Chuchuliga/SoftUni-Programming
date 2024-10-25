async function busStop() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const buses = document.getElementById("buses");
  const submitButton = document.getElementById("submit");

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  try {
    stopName.textContent = "Loading...";
    buses.replaceChildren();
    submitButton.disabled = true;

    const res = await fetch(url);

    if (res.status !== 200) {
      throw Error(`Error!`);
    }

    const data = await res.json();

    stopName.textContent = data.name;

    Object.entries(data.buses).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${b[0]} arrive in ${b[1]} minutes`;

      buses.appendChild(li);
    });

    submitButton.disabled = false;
  } catch (err) {
    stopName.textContent = "Error";
    submitButton.disabled = false;
  }
}
