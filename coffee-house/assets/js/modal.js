const cardList = document.querySelectorAll(".cards-list__card");
const modal = document.querySelector(".modal");

async function getJson() {
  //получаем с сервера json
  let response = await fetch("assets/products.json");
  const productsJSON = await response.json();

  //проверяем валидность данных и создаем карточки товаров
  if (!Array.isArray(productsJSON)) {
    throw TypeError(`Menu error. Products array i invalid.`);
  }
  console.log("Get JSON");
  return productsJSON;
}

const productsJSON = getJson();

cardList.forEach((card) => {
  card.addEventListener("click", showModal);
});

function showModal(event) {
  console.log("click");
  modal.classList.remove("hidden");
  let product = findObject(getProdTitle(event), productsJSON);
  let modal = this;
  fillModal(product, modal);
}

//находим название товара в карточке, по которой был клик
function getProdTitle(event) {
  let card = this;
  let title = card.querySelector(".card__title").innerHtml;
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
  modalName.innerHtml = obj.name;
  modalDesc.innerHtml = obj.description;
  modalImg.src = imageSrc;
  mobilPrice.innerHtml = obj.price;

  //размер
  const mobilSizesRow = modal.querySelector(".row-sizes");

  for (let key in obj.sizes) {
    let sizeName = key;
    let sizeValue = key.size;
    let sizePrice = key.addPrice;
    let input = `<input type="radio" id="size-${sizeName}" name="size" value="${sizePrice}" class="input"/>`;
    let label = `<label for="size-${sizeName}"><span class="input__type">${sizeName.toUpperCase()}</span><span class="input__value">${sizeValue}</span></label>`;
    if (key === "s") {
      input = `<input type="radio" id="size-${sizeName}" name="size" value="${sizePrice}" class="input" checked/>`;
    }
    mobilSizesRow.append(input);
    mobilSizesRow.append(label);
  }

  //дополнения
  const mobilAdditivesRow = modal.querySelector(".row-additives");

  obj.additives.map((additive, index) => {
    let additiveName = additive.size;
    let additivePrice = additive.addPrice;
    let input = `<input type="radio" id="additives-${index}" name="additives" value="${additivePrice}" class="input"/>`;
    let label = `<label for="additives-${index}"><span class="input__type">${index}</span><span class="input__value">${additiveName.toUpperCase()}</span></label>`;
    mobilSizesRow.append(input);
    mobilSizesRow.append(label);
  });
}
