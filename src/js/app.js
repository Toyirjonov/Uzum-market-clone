import { products } from "./data.js";
import formatNumber from "./formatNumber.js";
import "./searchProduct.js";
import "./changeTheme.js";

const template = document.querySelector("template");
const productList = document.querySelector(".products-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  // desructuring
  const {
    id,
    card: _card,
    thumbnail,
    title,
    rating: _rating,
    description: _description,
    price: _price,
    discountPercentage,
    reviews,
  } = product;

  const card = clone.getElementById("card");
  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const comment = clone.querySelector(".comment");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPriceEL = clone.querySelector(".discount-price");

  card.dataset.id = id;
  cardTitle.textContent = title;
  rating.textContent = _rating;
  comment.textContent = reviews.length;
  description.textContent = _description;
  cardImage.src = thumbnail;
  price.textContent = formatNumber(_price);

  const discountPrice = formatNumber(_price, discountPercentage);
  discountPriceEL.textContent = discountPrice;

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
