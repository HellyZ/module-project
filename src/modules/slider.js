const slider = () => {
  document.addEventListener("DOMContentLoaded", (e) => addDots());

  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const addDots = () => {
    let dotContainer = document.querySelector(".portfolio-dots");
    slides.forEach((slide, index) => {
      let dotElem = document.createElement("li");
      dotElem.classList.add("dot");
      dotContainer.append(dotElem);
    });
    dotContainer.children[0].classList.add("dot-active");
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    let dots = document.querySelectorAll(".dot");
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    let dots = document.querySelectorAll(".dot");
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    if (e.target.matches("#arrow-right")) {
      console.log("arrow-right");
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      console.log("arrow-left");
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target == dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;
