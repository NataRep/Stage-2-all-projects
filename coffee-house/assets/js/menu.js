async function createComponent() {
  //получаем с сервера json
  let response = await fetch("assets/products.json");
  const productsJSON = await response.json();

  //проверяем валидность данных и создаем карточки товаров
  if (!Array.isArray(productsJSON)) {
    throw TypeError(`Menu error. Products array i invalid.`);
  } else {
    addCards(cardsListWrapper, productsJSON);
  }

  //фильтруем отображение карточек для первичного вывода
  filterCards("coffee");
}

createComponent();

//кнопки переключения
buttonsMenuSwitcher.forEach((button) => {
  button.addEventListener("click", switchMenu);
});

function createCard(product) {
  const name = product.name;
  const description = product.description;
  const price = product.price;
  const category = product.category;

  const urlFolderImages = "assets/images/menu/";
  const image =
    urlFolderImages + product.name.toLowerCase().split(" ").join("-") + ".jpg";

  const card = document.createElement("li");
  card.classList.add("card", "cards-list__card", "hidden");
  card.dataset.category = category;

  const content = `<div class="card__info">
  <div class="card__img">
    <img src=${image} alt="${name} foto" >
  </div>
  <div class="card__title">${name}</div>
  <div class="card__desc">${description}</div>
</div>
<div class="card__price">$${price}</div>`;

  card.insertAdjacentHTML("afterbegin", content);

  return card;
}

function addCards(place, productsJSON) {
  productsJSON.forEach((product) => {
    place.append(createCard(product));
  });
}

function filterCards(category) {
  const cardsList = document.querySelectorAll(".card");
  cardsList.forEach((card) => {
    if (card.dataset.category === category) {
      card.classList.remove("hidden");
      card.classList.add("animated-opacity");
    } else if (
      card.dataset.category != category &&
      !card.classList.contains("hidden")
    ) {
      card.classList.add("hidden");
      card.classList.remove("animated-opacity");
    }
  });
  //делаем так, чтобы в зависимости от размера экрана с списке карточек товаров показывалось нужное колличество, скрывая лишние стилями
  hideCardsInAdaptive(findHomMuchCardsShow());
}

function switchMenu(event) {
  const buttonActive = event.target.closest(".button");
  let category;
  buttonsMenuSwitcher.forEach((button) => {
    if (button === buttonActive) {
      button.classList.add("current");
      category = button.dataset.category;
    } else {
      if (button.classList.contains("current")) {
        button.classList.remove("current");
      }
    }
  });
  filterCards(category);
}

function getVisibleCards() {
  return document.querySelectorAll(".card:not(.hidden)");
}

function findHomMuchCardsShow() {
  const countCardsModile = 4;
  const countCardsDefault = 8;
  return window.innerWidth <= 768 ? countCardsModile : countCardsDefault;
}

function hideCardsInAdaptive(countCards) {
  //делаем так, чтобы в зависимости от размера экрана с списке карточек товаров показывалось нужное колличество, скрывая лишние стилями
  while (countCards < getVisibleCards().length) {
    const visibleCards = getVisibleCards();
    visibleCards[visibleCards.length - 1].classList.add("hidden");
  }

  //проверяем количество скрытых карточек и решаем показывать ли кнопку loadMore
  const visibleCards = getVisibleCards();
  const category = visibleCards[0].dataset.category;
  let hideCards = document.querySelectorAll(
    `.hidden[data-category=${category}]`
  );
  changeButtonsLoadMore(hideCards);
}

function showCardsInAdaptive(countCards) {
  //задача функции увеличивать число отображаемых карточек , если их число в данный момент меньше требуемого

  //массив видимых карточек
  let visibleCards = getVisibleCards();

  ///масив скрытых карточек тойже категории
  const category = visibleCards[0].dataset.category;
  let hideCards = document.querySelectorAll(
    `.hidden[data-category=${category}]`
  );

  while ((countCards > visibleCards.length) & (hideCards.length > 0)) {
    visibleCards = getVisibleCards();
    hideCards[0].classList.remove("hidden");
    hideCards = document.querySelectorAll(`.hidden[data-category=${category}]`);
  }

  //заново проверяем количество скрытых карточек и решаем показывать ли кнопку loadMore
  hideCards = document.querySelectorAll(`.hidden[data-category=${category}]`);
  changeButtonsLoadMore(hideCards);
}

function changeButtonsLoadMore(hideCards) {
  //скрыть или показать кнопку Load more
  if (hideCards.length > 0) {
    console.log("showCardsInAdaptive " + hideCards.length);
    buttonLoadMore.classList.remove("hidden");
  } else {
    buttonLoadMore.classList.add("hidden");
  }
}

//Уменьшаем количество отображаемых карточек в зависимости от размера экрана
let isMobile = window.innerWidth > 768 ? false : true;

function changeNumberOfCards() {
  if (isMobile != window.innerWidth <= 768) {
    if (!(window.innerWidth > 768 === true)) {
      hideCardsInAdaptive(4);
      isMobile = true;
    } else {
      showCardsInAdaptive(8);
      isMobile = false;
    }
  }
}

function loadMoreCards() {
  //получаем количество скрытых карточек
  const visibleCards = getVisibleCards();
  const category = visibleCards[0].dataset.category;
  let hideCards = document.querySelectorAll(
    `.hidden[data-category=${category}]`
  );
  hideCards.forEach((card) => {
    card.classList.remove("hidden");
    card.classList.add("animated-opacity");
  });

  hideCards = document.querySelectorAll(`.hidden[data-category=${category}]`);
  changeButtonsLoadMore(hideCards);
}
buttonLoadMore.addEventListener("click", loadMoreCards);
window.addEventListener("resize", changeNumberOfCards, true);
