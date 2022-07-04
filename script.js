const hotelSearhButton = document.querySelector(".hotel-search-button");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-close-button");

// переключатель состояния модального окна
function modalToggle() {
  if (modalContainer.classList.contains("modal-opened")) {
    modalContainer.classList.remove("modal-opened");
  } else {
    modalContainer.classList.add("modal-opened");
  }
}

// открытие/закрытие модального окна по кнопкам
hotelSearhButton.addEventListener("click", modalToggle);
modalCloseButton.addEventListener("click", modalToggle);

// закрытие окна по клику вне его с контролем нажатия/отпускания мыши
var modalStateCheck = {};

document.addEventListener("mousedown", function (e) {
  modalStateCheck = e.target;
});

document.addEventListener("mouseup", function (e) {
  if (modalStateCheck == e.target && modalStateCheck == modalContainer) {
    modalToggle();
  }
  modalStateCheck = {};
})
