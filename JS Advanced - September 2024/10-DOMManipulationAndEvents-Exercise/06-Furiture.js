function furniture() {
  const [generateText, buyText] = document.querySelectorAll("textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  document.querySelector("input").disabled = false;

  generateBtn.addEventListener("click", onGenerate);
  buyBtn.addEventListener("click", onBuy);

  function onGenerate() {
    if (generateText.value !== "") {
      const input = JSON.parse(generateText.value);

      createTbody(input);
    }
  }

  function onBuy() {
    debugger;
    const bought = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    const checkboxes = Array.from(document.querySelectorAll("input")).filter(
      (ch) => ch.checked
    );

    for (const checkbox of checkboxes) {
      const [name, price, decFactor] =
        checkbox.parentElement.parentElement.querySelectorAll("td p");

      bought.push(name.textContent);
      totalPrice += Number(price.textContent);
      avgDecFactor += Number(decFactor.textContent);
    }

    avgDecFactor /= bought.length;

    buyText.value =
      `Bought furniture: ${bought.join(", ")}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgDecFactor}`;
  }

  function createTbody(input) {
    for (const el of input) {
      const row = document.createElement("tr");

      const imageData = document.createElement("td");
      const img = document.createElement("img");
      img.src = el.img;
      imageData.appendChild(img);
      row.appendChild(imageData);

      const nameData = imageData.cloneNode();
      const name = document.createElement("p");
      name.textContent = el.name;
      nameData.appendChild(name);
      row.appendChild(nameData);

      const priceData = nameData.cloneNode();
      const price = name.cloneNode();
      price.textContent = el.price;
      priceData.appendChild(price);
      row.appendChild(priceData);

      const decorationFactor = nameData.cloneNode();
      const decFactor = name.cloneNode();
      decFactor.textContent = el.decFactor;
      decorationFactor.appendChild(decFactor);
      row.appendChild(decorationFactor);

      const inputData = imageData.cloneNode();
      const input = document.createElement("input");
      input.type = "checkbox";
      inputData.appendChild(input);
      row.appendChild(inputData);

      document.querySelector("tbody").appendChild(row);
    }
  }
}
