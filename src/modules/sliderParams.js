// container (класс слайдера),
// slides (класс слайда),
// slideActive (класс маркера слайда),
// dotActive (класс маркера точки)

// const sliderParams = (container, slides, slideActive = "slide-active", dotActive = "dot-active") => {}

// container = .portfolio-content (document.querySelector(".portfolio-content");)
// slides = .portfolio-item (document.querySelectorAll(".portfolio-item");)
// const newSlider = (
//   container,
//   slides,
//   slideActive = "slide-active",
//   dotActive = "dot-active"
// ) => {
//   const body = document.querySelector("body");
//   const collection = body.children;
//   // console.log(body);
//   console.log(Array.from(collection));
//   console.log(`.${container}`);
//   let result = body.classList.contains(`.${container}`);
//   console.log(result);
//   let allClasses;
//   Array.from(collection).forEach((child) => {
//     console.log("child", child);
//     Array.from(child).forEach((item) => {
//       console.log("item", item);
//       // console.log(items.contains(`.${container}`));
//     });
//     console.log(allClasses);
//   });

//   // console.log(body.children);
//   // console.log(collection.contains(container));
//   // document.addEventListener("DOMContentLoaded", (e) => addDots());
//   // if (document.children.contains(`.${container}`)) console.log(`${container} есть`)
//   // if (document.children.contains(`.${slides}`)) console.log(`${slides} есть`)
//   // document.contains(container)
//   // document.contains(slides)
//   const timeInterval = 2000;

//   let currentSlide = 0;
//   let interval;

//   const addDots = () => {};
// };

// function addDots(sliderBlock, itemClassName) {
//   let dotContainer = sliderBlock.querySelector(".portfolio-dots");
//   const slides = document.querySelectorAll(itemClassName);
//   slides.forEach((slide, index) => {
//     let dotElem = document.createElement("li");
//     dotElem.classList.add("dot");
//     if (index == 0) {
//       dotElem.classList.add("dot-active");
//     }
//     dotContainer.append(dotElem);
//   });
//   // dotContainer.children[0].classList.add("dot-active");

//   // sliderBlock.append(dotsList);
// }

const sliderParams = (sliderContainerClass, sliderItemClass) => {
  let sliderBlock = document.querySelector(sliderContainerClass);
  if (!sliderBlock) {
    console.error(`Incorrect slider container ${sliderContainerClass}!`);
    return;
  }

  const slides = document.querySelectorAll(sliderItemClass);
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  addDots: () => {
    // let dotsList = sliderBlock.querySelector(".portfolio-dots");
    // dotsList.classList.add(".portfolio-dots");
    let dotContainer = sliderBlock.querySelector(".portfolio-dots");
    slides.forEach((slide, index) => {
      let dotElem = document.createElement("li");
      dotElem.classList.add("dot");
      if (index == 0) {
        dotElem.classList.add("dot-active");
      }
      dotContainer.append(dotElem);
    });
    dotContainer.children[0].classList.add("dot-active");

    sliderBlock.append(dotsList);
  };

  // addDots();

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
    let dots = sliderBlock.querySelectorAll(".dot");
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

  // document.addEventListener("DOMContentLoaded", (e) => this.addDots());

  startSlide(timeInterval);
};

// export default sliderParams;
export default sliderParams;
