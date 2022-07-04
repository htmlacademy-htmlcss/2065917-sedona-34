const hotelSearchButton = document.querySelector(".hotel-search-button");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-close-button");

// переключатель состояния модального окна
function modalToggle() {
  modalContainer.classList.toggle("modal-opened");
}

// открытие/закрытие модального окна по кнопкам
hotelSearchButton.addEventListener("click", modalToggle);
modalCloseButton.addEventListener("click", modalToggle);

// закрытие модального окна по клику вне его с контролем нажатия/отпускания мыши
let modalStateCheck = {};

document.addEventListener("mousedown", function (e) {
  modalStateCheck = e.target;
});

document.addEventListener("mouseup", function (e) {
  if (modalStateCheck === e.target && modalStateCheck === modalContainer) {
    modalToggle();
  }
  modalStateCheck = {};
})

// закрытие модального окна по клавише ESC
document.addEventListener("keydown", function(e) {
    if (modalContainer.classList.contains("modal-opened") && e.code === "Escape") {
      modalToggle();
    }
  }
);
