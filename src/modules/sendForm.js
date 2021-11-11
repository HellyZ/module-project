const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  statusBlock.classList.add("text-primary");
  const spinnerLoader = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    spinnerLoader.classList.add("spinner-border");
    spinnerLoader.classList.add("text-primary");
    statusBlock.textContent = loadText;
    form.append(statusBlock);
    form.append(spinnerLoader);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody)
      .then((data) => {
        spinnerLoader.classList.remove("spinner-border");
        spinnerLoader.classList.remove("text-primary");
        statusBlock.textContent = successText;

        formElements.forEach((input) => {
          input.value = "";
        });
      })
      .catch((error) => {
        spinnerLoader.classList.remove("spinner-border");
        spinnerLoader.classList.remove("text-primary");
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default sendForm;
