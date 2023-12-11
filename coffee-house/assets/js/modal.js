const cardList = document.querySelectorAll(".cards-list__card");
const modal = document.querySelector(".modal");

async function getJson() {
  //получаем с сервера json
  let response = await fetch("assets/products.json");
  const productsJSON = await response.json();

  //проверяем валидность данных и создаем карточки товаров
  if (!Array.isArray(productsJSON)) {
    throw TypeError(`Menu error. Products array i invalid.`);
  } else {
    document.querySelectorAll(".cards-list__card").forEach((card) => {
      card.addEventListener("click", function () {
        showModal(event, productsJSON);
      });
    });
  }
}
getJson();

function showModal(event, productsJSON) {
  document.querySelector("body").classList.toggle("scroll-none");
  modal.classList.remove("hidden");
  let prodTitle = getProdTitle(event);
  let product = findObject(prodTitle, productsJSON);
  fillModal(product, modal);
}

//находим название товара в карточке, по которой был клик
function getProdTitle(event) {
  let card = event.target.closest(".cards-list__card");
  let title = card.querySelector(".card__title").innerHTML;
  return title;
}

//находим нужный товар в массиве
function findObject(title, array) {
  let object = array.find((obj) => {
    if (obj.name === title) {
      return title;
    }
  });
  return object;
}

function fillModal(obj, modal) {
  //DOM
  const modalImg = modal.querySelector("img");
  const modalName = modal.querySelector(".modal__title");
  const modalDesc = modal.querySelector(".modal__desc");
  const mobilPrice = modal.querySelector(".modal__total-value");

  const urlFolderImages = "assets/images/menu/";
  const imageSrc =
    urlFolderImages + obj.name.toLowerCase().split(" ").join("-") + ".jpg";

  //заполняю html
  modalName.innerHTML = obj.name;
  modalDesc.innerHTML = obj.description;
  modalImg.src = imageSrc;
  mobilPrice.innerHTML = obj.price;

  //размер
  const mobilSizesRow = modal.querySelector(".row-sizes");

  for (let key in obj.sizes) {
    let sizeName = key;
    let sizeValue = obj.sizes[key].size;
    let sizePrice = obj.sizes[key].addPrice;
    let input = `<input type="radio" id="size-${sizeName}" name="size" value="${sizePrice}" class="input"/>`;
    let label = `<label for="size-${sizeName}"><span class="input__type">${sizeName.toUpperCase()}</span><span class="input__value">${sizeValue}</span></label>`;
    if (key === "s") {
      input = `<input type="radio" id="size-${sizeName}" name="size" value="${sizePrice}" class="input" checked/>`;
    }
    mobilSizesRow.insertAdjacentHTML("beforeend", input);
    mobilSizesRow.insertAdjacentHTML("beforeend", label);
  }

  //дополнения
  const mobilAdditivesRow = modal.querySelector(".row-additives");

  obj.additives.map((additive, index, array) => {
    let additiveName = additive.name;
    let additivePrice = additive.addPrice;
    let input = `<input type="radio" id="additives-${
      index + 1
    }" name="additives" value="${additivePrice}" class="input"/>`;
    let label = `<label for="additives-${
      index + 1
    }"><span class="input__type">${
      index + 1
    }</span><span class="input__value">${additiveName}</span></label>`;
    mobilAdditivesRow.insertAdjacentHTML("beforeend", input);
    mobilAdditivesRow.insertAdjacentHTML("beforeend", label);
  });
}

//добавить закрытие модалки и очистку модалки после закрытия и + document.querySelector("body").classList.toggle("scroll-none");..
//Щелчок по области вокруг модала и кнопки "Закрыть" закрывает его: +2

const closeButton = modal.querySelector(".modal__button");
const modalBg = modal.querySelector(".modal__bg");

function closeModal(event) {
  if (event.target == closeButton || event.target == modalBg) {
    modal.classList.add("hidden");
  }
}
//добавить калькулятор
