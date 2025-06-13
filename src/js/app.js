import { products } from "./data.js";
import "./searchProduct.js";
import { renderUi } from "./renderUi.js";

const priceSort = document.getElementById("price-sort");
const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");
const theme = localStorage.getItem("theme");

document.getElementById("year").textContent = new Date().getFullYear();

renderUi(products);

if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = theme === "karma";
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "light" ? "karma" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme === "karma";
});

const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("text-purple-500");
    like.classList.toggle("fa-solid");
    like.classList.toggle("fa-regular");
  });
});

priceSort.addEventListener("change", (e) => {
  const price =
    e.target.options[e.target.selectedIndex].getAttribute("data-price");
  const productsForSorting = [...products];

  if (price == "low") {
    const newSort = productsForSorting.sort((a, b) => {
      return a.price - b.price;
    });
    renderUi(newSort);
    const likeButtons = document.querySelectorAll(".like");

    likeButtons.forEach((like) => {
      like.addEventListener("click", () => {
        like.classList.toggle("text-purple-500");
        like.classList.toggle("fa-solid");
        like.classList.toggle("fa-regular");
      });
    });
  } else {
    const newSort = productsForSorting.sort((a, b) => {
      return b.price - a.price;
    });
    renderUi(newSort);
    const likeButtons = document.querySelectorAll(".like");

    likeButtons.forEach((like) => {
      like.addEventListener("click", () => {
        like.classList.toggle("text-purple-500");
        like.classList.toggle("fa-solid");
        like.classList.toggle("fa-regular");
      });
    });
  }
});
