function fadeIn(elem, speed) {
  if (!elem.style.opacity) {
    elem.style.opacity = 0;
  }

  let inInterval = setTimeout(function () {
    elem.style.opacity = Number(elem.style.opacity) + 0.2;
    if (elem.style.opacity >= 1) clearTimeout(inInterval);
  }, speed / 50);
}

function fadeOut(elem, speed) {
  if (!elem.style.opacity) {
    elem.style.opacity = 1;
  }

  let inInterval = setTimeout(function () {
    elem.style.opacity = Number(elem.style.opacity) - 0.2;
    if (elem.style.opacity <= 0) {
      clearTimeout(inInterval);
      elem.style.display = "none";
    }
  }, speed / 50);
}

const modal = () => {
  const btns = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = document.querySelector(".popup-close");
  const handleModal = () => {
    if (modal.style.display == "block") {
      fadeOut(modal, 500);
    } else {
      modal.style.display = "block";
      fadeIn(modal, 500);
    }
  };
  const renderModal = (btns) => {
    let width = document.documentElement.clientWidth;
    if (width < 768) {
      btns.forEach((btn) => {
        btn.removeEventListener("click", handleModal, false);
      });
    } else {
      btns.forEach((btn) => {
        btn.addEventListener("click", handleModal);
      });
    }
  };

  window.addEventListener("load", () => renderModal(btns), false);
  window.addEventListener("resize", () => renderModal(btns), false);
  closeBtn.addEventListener("click", handleModal, false);
};

module.exports = modal;
