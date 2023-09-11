const darkMode = document.querySelector(".dark-mode_button");
const lightMode = document.querySelector(".light-mode_button");
const bodyEl = document.querySelector("body");

const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
  bodyEl.classList.add("dark-mode");
  darkMode.classList.toggle("hidden");
  lightMode.classList.toggle("hidden");
}

const toggleModeBtn = () => {
  darkMode.classList.toggle("hidden");
  lightMode.classList.toggle("hidden");
  bodyEl.classList.toggle("dark-mode");
};

darkMode.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});

lightMode.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
