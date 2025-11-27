const btnOpenModal = document.querySelector(".modal-btn");
const btnCloseModal = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

const showModal = function () {
  modalOverlay.classList.add("open-modal");
};

const closeModal = function () {
  modalOverlay.classList.remove("open-modal");
};

btnOpenModal.addEventListener("click", function () {
  showModal();
});

btnCloseModal.addEventListener("click", function () {
  closeModal();
});

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
