const fadeIn = (elem, speed) => {
  let frameId = requestAnimationFrame(() => fadeIn(elem));
  elem.style.display = "block";
  elem.style.opacity = Number(elem.style.opacity) + 0.1;
  if (elem.style.opacity >= 1) {
    cancelAnimationFrame(frameId);
  }
};

const fadeOut = (elem, speed) => {
  let frameId = requestAnimationFrame(() => fadeOut(elem));
  elem.style.opacity = Number(elem.style.opacity) - 0.1;
  if (elem.style.opacity <= 0) {
    elem.style.display = "none";
    cancelAnimationFrame(frameId);
  }
};

const RequestModal = () => {
  const modalElement = document.querySelector(".popup");
  if (!modalElement.style.opacity) {
    modalElement.style.opacity = 0;
  }

  const btns = document.querySelectorAll(".popup-btn");
  const closeBtn = document.querySelector(".popup-close");

  const toggleModal = (event) => {
    if (modalElement.style.display == "block") {
      fadeOut(modalElement, 10);
    } else {
      fadeIn(modalElement, 10);
    }
  };
  const renderModal = (btns) => {
    let width = document.documentElement.clientWidth;
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

  window.addEventListener("load", () => renderModal(btns), false);
  window.addEventListener("resize", () => renderModal(btns), false);
  closeBtn.addEventListener("click", toggleModal, false);
};

export default RequestModal;
