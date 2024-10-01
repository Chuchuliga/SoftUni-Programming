function encodeAndDecodeMessages() {
  const [inputText, outputText] = document.querySelectorAll("div textarea");
  const [inputBnt, outputBtn] = document.querySelectorAll("div button");

  inputBnt.addEventListener("click", onEncode);
  outputBtn.addEventListener("click", onDecode);

  let temp = "";

  function onEncode() {
    let message = "";
    if (inputText.value !== "") {
      temp = inputText.value;

      for (const char of temp) {
        message += String.fromCharCode(char.charCodeAt() + 1);
      }
      outputText.value = message;
      console.log(outputText.value);
    }
    inputText.value = "";
  }

  function onDecode() {
    outputText.value = temp;
  }
  outputText.value = "";
}   