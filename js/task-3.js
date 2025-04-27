const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", () => {
  const trimValue = inputElement.value.trim();
  outputElement.textContent = trimValue === "" ? "Anonymous" : trimValue;
});
