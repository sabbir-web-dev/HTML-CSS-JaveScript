const contents = document.querySelectorAll(".expending-content");

contents.forEach((content) => {
  content.addEventListener("click", () => {
    removeActive();
    content.classList.add("expending-active");
  });
});

const removeActive = () => {
  contents.forEach((content) => {
    content.classList.remove("expending-active");
  });
};
