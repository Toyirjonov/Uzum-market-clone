const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");

const theme = localStorage.getItem("theme");
document.getElementById("current-year").textContent = new Date().getFullYear();
if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = theme === "coffee";
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "light" ? "coffee" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme === "coffee";
});
