function changeBackground(color) {
  document.body.style.backgroundColor = color;
}
// Event Listener
const darkButton = document.getElementById("dark-mode-btn");
darkButton.addEventListener("click", function () {
  changeBackground("gray");
});

const btn = document.getElementById("orange-btn");
btn.addEventListener("click", function () {
  changeBackground("orange");
});
// toggle:- On ko Off and vice-versa
const theme = document.getElementById("theme-btn");
theme.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    changeBackground("black");
    theme.innerText = "light Mode";
  } else {
    changeBackground("white");
    theme.innerText = "Dark Mode";
  }
});
