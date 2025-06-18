const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = Function('"use strict"; return (' + display.value + ')')();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

document.getElementById("darkToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/\d|\+|\-|\*|\/|\./.test(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
