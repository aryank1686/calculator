// INCOMPLETE RIGHT NOW - FIX BROKEN PARTS AFTER GAINING EXPERIENCE

const image = document.querySelector(".image");
const body = document.querySelector("body");
const container = document.querySelector(".calculator");
const input = document.querySelector("input");

input.focus();
let lightMode = false;
image.addEventListener("click", () => {
  if (lightMode === true) {
    body.style.backgroundColor = "black";
    container.style.backgroundColor = "black";
    input.style.backgroundColor = "black";
    input.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    container.style.backgroundColor = "white";
    input.style.backgroundColor = "white";
    input.style.color = "black";
  }
  lightMode = !lightMode;
  input.focus();
});

input.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9+\-*/().\s]/g, "");
});

buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      input.value = eval(input.value);
    } else if (e.target.textContent === "AC") {
      input.value = "";
    } else if (button.classList.contains("clear")) {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += e.target.textContent;
    }
    input.focus();
  });
});
