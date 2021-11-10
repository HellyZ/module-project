import timer from "./modules/timer";
import menu from "./modules/menu";
import RequestModal from "./modules/modal";
import handleValidation from "./modules/validateFields";
import sliderSwiper from "./modules/sliderSwiper";
import Tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("12 november 2021");
menu();
RequestModal();
sliderSwiper();

handleValidation();
Tabs();
slider();
calc();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
