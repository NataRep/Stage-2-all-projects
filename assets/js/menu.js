const cardsListWrapper = document.querySelector(".cards-list");

async function createComponent() {
  //получаем с сервера json
  let response = await fetch("assets/products.json");
  console.log(response);
  const productsJSON = await response.json();
  console.log(productsJSON);

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
  const cardsList = cardsListWrapper.querySelectorAll(".cards");
  Array(cardsList).forEach((card) => {
    if (card.dataset.category === category) {
      card.classList.remove("hidden");
    } else if (
      card.dataset.category != category &&
      !card.classList.contains("hidden")
    ) {
      card.classList.add("hidden");
    }
  });
}
