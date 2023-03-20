const btnDarkMode = document.querySelector(".dark-mode-btn");
const projects = document.querySelectorAll(".project");
const linkBtn = document.querySelectorAll(".btn-outline");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
  projects.forEach((project) => {
    project.classList.add("hover-black");
  });
  linkBtn.forEach((btn) => {
    btn.style.color = "#e3b308";
  });
}

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
  projects.forEach((project) => {
    project.classList.add("hover-dark");
  });
  linkBtn.forEach((btn) => {
    btn.style.color = "#e3b308";
  });
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
  projects.forEach((project) => {
    project.classList.remove("hover-dark");
  });
  linkBtn.forEach((btn) => {
    btn.style.color = "#000";
  });
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
    projects.forEach((project) => {
      project.classList.add("hover-dark");
    });
    linkBtn.forEach((btn) => {
      btn.style.color = "#e3b308";
    });
  } else {
    localStorage.setItem("darkMode", "light");
    projects.forEach((project) => {
      project.classList.remove("hover-dark");
    });
    linkBtn.forEach((btn) => {
      btn.style.color = "#000";
    });
  }
};
