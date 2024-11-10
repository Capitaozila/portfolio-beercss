import "beercss";
import "material-dynamic-colors";
import "../styles/style.css";

const toggleTheme = async () => {
  const currentMode = ui("mode");

  if (currentMode === "light") {
    ui("mode", "dark");
  } else {
    ui("mode", "light");
  }
};

const initializeTheme = () => {
  const currentMode = ui("mode");
  if (!currentMode || currentMode === "dark") {
    ui("mode", "light");
    const icon = document.getElementById("theme-toggle").querySelector("i");
    if (icon) {
      icon.textContent = "dark_mode";
    }
  }
};

const addAnimation = () => {
  const button = document.getElementById("theme-toggle");
  button.style.transition = "transform 0.2s ease-in-out";
  button.style.transform = "rotate(360deg) scale(1.5)";

  button.addEventListener(
    "transitionend",
    () => {
      button.style.transition = "";
      button.style.transform = "";
    },
    { once: true }
  );
};

document.getElementById("theme-toggle").addEventListener("click", () => {
  toggleTheme();
  addAnimation();
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  const icon = this.querySelector("i");

  if (icon.textContent === "light_mode") {
    icon.textContent = "dark_mode";
  } else {
    icon.textContent = "light_mode";
  }
});

document.addEventListener("DOMContentLoaded", initializeTheme);
