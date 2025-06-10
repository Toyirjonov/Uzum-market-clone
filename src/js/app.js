import { products } from "./data.js";
console.log(products);

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

const template = document.querySelector("template");
const productList = document.querySelector(".products-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  const card = clone.getElementById("card");
  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const comment = clone.querySelector(".comment");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPrice = clone.querySelector(".discount-price");
  const installment = clone.querySelector(".installment");

  const discountPriceValue = Math.round(
    product.price * (1 - product.discountPercentage / 100)
  );
  const months = 4;
  const monthlyPayment = Math.round(discountPriceValue / months);

  installment.innerHTML = `<mark>${monthlyPayment.toLocaleString()} so'm/oyiga</mark>`;
  card.dataset.id = product.id;
  cardTitle.textContent = product.title;
  rating.textContent = product.rating;
  comment.textContent = product.reviews.length;
  description.textContent = product.description;
  cardImage.src = product.thumbnail;
  price.textContent = `${product.price.toLocaleString()} UZS`;
  discountPrice.textContent = `${discountPriceValue.toLocaleString()} UZS`;

  productList.appendChild(clone);
});

const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("text-purple-500");
    like.classList.toggle("fa-solid");
    like.classList.toggle("fa-regular");
  });
});
