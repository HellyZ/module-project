const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";

  const validate = (list) => {
    let success = true;
    list.forEach((el) => {
      console.log(el.name);
      console.log(el.value);
      try {
        let testData = el.value;
        console.log(testData);
        if (el.name == "user_name") {
          let name_Regexp = new RegExp(/([а-яА-Я ]+)/gu);
          if (!name_Regexp.test(testData)) {
            success = false;
            console.error("Имя введено неверно!");
            statusBlock.textContent = errorText;
          }
        } else if (el.name == "user_phone") {
          let phone_Regexp = new RegExp(
            /^[\+]?[(]?[0-9]{3}[)]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          );
          if (!phone_Regexp.test(testData)) {
            success = false;
            console.error("Номер введен неверно!");
            statusBlock.textContent = errorText;
          }
        } else if (el.name == "user_message") {
          let message_Regexp = new RegExp(/([а-яА-Я\d.,?!"-]+)/gu);
          if (!message_Regexp.test(testData)) {
            success = false;
            console.error("Сообщение введено неверно");
            statusBlock.textContent = errorText;
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    });
    return success;
  };

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

    statusBlock.textContent = loadText;
    form.append(statusBlock);

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

    console.log("submit");

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      console.log("Данные не валидны");
    }
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
