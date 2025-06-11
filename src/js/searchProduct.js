const searchEl = document.getElementById("search");

searchEl.addEventListener("input", () => {
  const titles = document.querySelectorAll(".card-title");
  const searchText = searchEl.value.toLowerCase();

  titles.forEach((title) => {
    if (title.textContent.toLowerCase().includes(searchText)) {
      title.parentElement.parentElement.style.display = "block";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
  });
});
