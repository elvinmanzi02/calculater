# calculater


document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  let currentInput = "";
  let result = null;
  let operator = null;

  function updateDisplay() {
    display.textContent = currentInput;
  }

  function calculate() {
    if (!operator) return;

    switch (operator) {
      case "+":
        result += parseFloat(currentInput);
        break;
      case "-":
        result -= parseFloat(currentInput);
        break;
      case "x":
        result *= parseFloat(currentInput);
        break;
      case "/":
        result /= parseFloat(currentInput);
        break;
    }
    currentInput = result.toString();
    operator = null;
    updateDisplay();
  }

  document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", function() {
      if (currentInput === "0" || currentInput === "-0") {
        currentInput = button.textContent;
      } else {
        currentInput += button.textContent;
      }
      updateDisplay();
    });
  });

  document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", function() {
      if (currentInput !== "") {
        if (result === null) {
          result = parseFloat(currentInput);
        } else {
          calculate();
        }
        operator = button.textContent;
        currentInput = "";
      }
    });
  });

  document.getElementById("clear").addEventListener("click", function() {
    currentInput = "";
    result = null;
    operator = null;
    updateDisplay();
  });

  document.getElementById("equal").addEventListener("click", function() {
    if (operator && currentInput !== "") {
      calculate();
    }
  });

  document.getElementById("signs").addEventListener("click", function() {
    if (currentInput !== "") {
      currentInput =
        currentInput[0] === "-" ? currentInput.slice(1) : "-" + currentInput;
      updateDisplay();
    }
  });

  document.getElementById("percentage").addEventListener("click", function() {
    if (currentInput !== "") {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    }
  });

  document.getElementById("dot").addEventListener("click", function() {
    if (currentInput.indexOf(".") === -1) {
      currentInput += ".";
      updateDisplay();
    }
  });
});
