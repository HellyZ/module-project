import timer from "./modules/timer";
import menu from "./modules/menu";
import RequestModal from "./modules/modal";
import handleValidation from "./modules/validateFields";
import sliderSwiper from "./modules/sliderSwiper";
import smoothScroll from "./modules/smoothScroll";

timer("31 december 2021");
menu();
RequestModal();
sliderSwiper();

handleValidation();
smoothScroll();
