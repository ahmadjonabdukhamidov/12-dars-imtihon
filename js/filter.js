// import "./changesUI.js";

const searchFormEl = document.querySelector(".search");

searchFormEl.search.addEventListener("input", () => {
  const searchValue = searchFormEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
  });
});
