const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("clear")) {
      type.value = type.value.slice(0, -1);
    } else if (button.textContent === "AC") {
      type.value = "";
    } else if (
      button.classList.contains("add") ||
      button.classList.contains("minus") ||
      button.classList.contains("divide") ||
      button.classList.contains("multiply")
    ) {
      type.value += ` ${button.textContent} `;
    } else if (button.textContent === "=") {
    } else {
      type.value += button.textContent;
    }

    type.focus();
  });
});

type.addEventListener("input", function () {
  const notAllowedPattern = /[^0-9+\-*/().]/g;
  this.value = this.value.replace(notAllowedPattern, "");
});
