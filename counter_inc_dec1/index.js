let counterElement = document.getElementById("counterValue");
console.log(counterElement)

function onIncrement() {
  let previousCounterValue = counterElement.textContent=0;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent=0;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onReset() {
  let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "black";
}