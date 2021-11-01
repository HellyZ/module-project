import Swiper from "swiper";

const sliderSwiper = () => {
  const slider = new Swiper(".swiper", {
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};

export default sliderSwiper;
