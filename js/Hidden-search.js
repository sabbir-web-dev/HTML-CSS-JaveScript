const search = document.querySelector(".hidden-search");
const btn = document.querySelector(".hidden-search-btn");

btn.addEventListener("click", () => {
  search.classList.toggle("hidden-search-active");
})