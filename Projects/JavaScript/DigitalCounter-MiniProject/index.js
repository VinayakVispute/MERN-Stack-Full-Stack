function increment() {
  let counterDiv = document.querySelector("#counterDigit");
  let counterValue = parseInt(counterDiv.textContent);
  counterDiv.textContent = counterValue + 1;
}
function decrement() {
  let counterDiv = document.querySelector("#counterDigit");
  let counterValue = parseInt(counterDiv.textContent);
  counterDiv.textContent = counterValue - 1;
}
