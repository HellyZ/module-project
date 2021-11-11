const handleValidation = (event) => {
  const form1Inputs = document.querySelectorAll("#form1 input");
  const form2Inputs = document.querySelectorAll("#form2 input");
  const form3Inputs = document.querySelectorAll("#form3 input");

  const validateField = (event) => {
    let field = event.target;
    field.classList.add("form-control");

    if (field.name === "user_email") {
      let patternStr = "^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
      if (new RegExp(`\\b${patternStr}\\b`).test(field.value)) {
        field.setCustomValidity("");
      } else {
        field.setCustomValidity(
          "Используйте адресс формата you.address@email.com"
        );
      }
    } else if (
      field.name === "user_message" &&
      field.placeholder === "Ваше сообщение"
    ) {
      const reStr = "[а-яА-Я- ]";
      if (field.value) {
        if (new RegExp(`\\b${reStr}\\b`).test(field.value)) {
          field.setCustomValidity("");
        } else {
          field.setCustomValidity("Используйте только кирилицу");
        }
      }
    } else if (field.name === "user_phone") {
      const reStr = "[0-9+]{11,}$";
      if (field.value) {
        if (new RegExp(`\\b${reStr}\\b`).test(field.value)) {
          field.setCustomValidity("");
        } else {
          field.setCustomValidity(
            "только цифры, знак +. Должен содержать болше 11 символов!"
          );
          return;
        }
      }
    } else if (field.name === "user_name") {
      const reStr = "[a-zA-Z- ]+";
      if (field.value) {
        field.value = field.value
          .toLowerCase()
          .replace(/([ \-])\1+/g, function (str, match) {
            return match[0];
          })
          .replace(/\b\w/g, (c) => c.toUpperCase());
      }
      if (new RegExp(`\\b${reStr}\\b`).test(field.value)) {
        field.setCustomValidity("");
      } else {
        field.setCustomValidity(
          "только латиница в любом регистре, дефис и пробел."
        );
      }
    }
  };

  form1Inputs.forEach((item) =>
    item.addEventListener("blur", (event) => validateField(event))
  );
  form2Inputs.forEach((item) =>
    item.addEventListener("blur", (event) => validateField(event))
  );
  form3Inputs.forEach((item) =>
    item.addEventListener("blur", (event) => validateField(event))
  );
};

export default handleValidation;
