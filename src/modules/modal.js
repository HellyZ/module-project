import { animate } from "./helpers";

const RequestModal = () => {
  const modalElement = document.querySelector(".popup");
  if (!modalElement.style.opacity) {
    modalElement.style.opacity = 0;
  }

  const btns = document.querySelectorAll(".popup-btn");

  const toggleModal = (event) => {
    if (modalElement.style.display == "block") {
      animate({
        duration: 100,
        timing(timeFraction) {
          return 1 - timeFraction;
        },
        draw(progress) {
          modalElement.style.opacity = progress * 100 + "%";
          if (modalElement.style.opacity <= 0) {
            modalElement.style.display = "none";
          }
        },
      });
    } else {
      modalElement.style.display = "block";
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalElement.style.opacity = progress * 100 + "%";
        },
      });
    }
  };
  const renderModal = (btns) => {
    let width = document.documentElement.clientWidth;
    modalElement.style.display = "none";
    if (width < 768) {
      btns.forEach((btn) => {
        btn.removeEventListener("click", toggleModal, false);
      });
    } else {
      btns.forEach((btn) => {
        btn.addEventListener("click", toggleModal);
      });
    }
  };

  const closeModalBtn = document.querySelector(".popup-close");
  closeModalBtn.addEventListener("click", toggleModal);
  window.addEventListener("load", () => renderModal(btns), false);
  window.addEventListener("resize", () => renderModal(btns), false);
};
export default RequestModal;
