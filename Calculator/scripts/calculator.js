let calculator = "";
let history = localStorage.getItem("history") || "";

document.getElementById("history").value = history;

function addZero() {
  calculator += "0";
  document.getElementById("calculator").value = calculator;
}

function addOne() {
  calculator += "1";
  document.getElementById("calculator").value = calculator;
}

function addTwo() {
  calculator += "2";
  document.getElementById("calculator").value = calculator;
}

function addThree() {
  calculator += "3";
  document.getElementById("calculator").value = calculator;
}

function addFour() {
  calculator += "4";
  document.getElementById("calculator").value = calculator;
}

function addFive() {
  calculator += "5";
  document.getElementById("calculator").value = calculator;
}

function addSix() {
  calculator += "6";
  document.getElementById("calculator").value = calculator;
}

function addSeven() {
  calculator += "7";
  document.getElementById("calculator").value = calculator;
}

function addEight() {
  calculator += "8";
  document.getElementById("calculator").value = calculator;
}

function addNine() {
  calculator += "9";
  document.getElementById("calculator").value = calculator;
}

function addPlus() {
  calculator += "+";
  document.getElementById("calculator").value = calculator;
}

function addSubtract() {
  calculator += "-";
  document.getElementById("calculator").value = calculator;
}

function addMultiply() {
  calculator += "*";
  document.getElementById("calculator").value = calculator;
}
function addDivide() {
  calculator += "/";
  document.getElementById("calculator").value = calculator;
}

function Equal() {
  try {
    let result = eval(calculator);
    document.getElementById("result").value = result;

    history += calculator + "=" + result + "\n";
    document.getElementById("history").value = history;
    localStorage.setItem("history", history);

    calculator = "";
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

function clearHistory() {
  history = "";
  document.getElementById("history").value = "";
  localStorage.removeItem("history");
}

function Clear() {
  calculator = "";
  document.getElementById("result").value = "";
  document.getElementById("calculator").value = "";
}
