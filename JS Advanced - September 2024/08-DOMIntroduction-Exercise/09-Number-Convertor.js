function numberConvertor() {
  const selectMenu = document.getElementById("selectMenuTo");
  const input = document.getElementById("input");
  const btnElement = document.querySelector("button");
  const result = document.getElementById("result");

  const binaryOption = document.createElement("option");
  binaryOption.value = "binary";
  binaryOption.textContent = "Binary";
  selectMenu.add(binaryOption);

  const hexadecimalOption = document.createElement("option");
  hexadecimalOption.value = "hexadecimal";
  hexadecimalOption.textContent = "Hexadecimal";
  selectMenu.add(hexadecimalOption);

  const options = {
    binary: (num) => num.toString(2),
    hexadecimal: (num) => num.toString(16).toUpperCase(),
    "": (num) => num,
  };

  btnElement.addEventListener("click", () => {
    result.value = options[selectMenu.value](Number(input.value));
  });
}