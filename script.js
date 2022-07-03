let hotelSearhButton = document.querySelector(".hotel-search-button")
let modalWindow = document.querySelector(".modal-container")
let modalCloseButton = document.querySelector(".modal-close-button")

hotelSearhButton.onclick = function() {
  modalWindow.classList.add("modal-opened")
};

modalCloseButton.onclick = function() {
  modalWindow.classList.remove("modal-opened")
};
