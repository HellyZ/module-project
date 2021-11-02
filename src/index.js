import timer from "./modules/timer";
import menu from "./modules/menu";
import RequestModal from "./modules/modal";
import handleValidation from "./modules/validateFields";
import sliderSwiper from "./modules/sliderSwiper";
import Tabs from "./modules/tabs";
import slider from "./modules/slider";
// import sliderParams from "./modules/sliderParams";

timer("04 november 2021");
menu();
RequestModal();
sliderSwiper();

handleValidation();
Tabs();
slider();
// sliderParams(".portfolio-content", ".portfolio-item");
