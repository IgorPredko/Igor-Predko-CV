const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
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

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// document.querySelector('button').onclick =function () {
//     downloadFile('https://www.google-analytics.com/analytics.js', 'gooleAnalytics.js');
//   }

// function downloadFile(url, fileName) {
//   fetch(url, { method: "get", mode: "no-cors", referrerPolicy: "no-referrer" })
//     .then((res) => res.blob())
//     .then((res) => {
//       const aElement = document.createElement("a");
//       aElement.setAttribute("download", fileName);
//       const href = URL.createObjectURL(res);
//       aElement.href = href;
//       // aElement.setAttribute('href', href);
//       aElement.setAttribute("target", "_blank");
//       aElement.click();
//       URL.revokeObjectURL(href);
//     });
// }
// document.querySelector("btn").onclick = function () {
//   downloadFile(
//     "https://www.google-analytics.com/analytics.js",
//     "gooleAnalytics.js"
//   );
// };
