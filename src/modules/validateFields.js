const handleValidation = (event) => {
  const forms = document.querySelectorAll("form");
  let inputs = [];
  forms.forEach((el) => inputs.push(el.querySelectorAll("input")));
  console.log("inputs", inputs);

  function capitalize(string) {
    return string
      .split(/\s/)
      .map(function (item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      })
      .join(" ");
  }

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
      if (field.value) {
        if (new RegExp(/\+[0-9]{11,}$/).test(field.value)) {
          field.setCustomValidity("");
        } else {
          field.setCustomValidity(
            "только цифры, знак +. Должен содержать болше 11 символов!"
          );
          return;
        }
      }
    } else if (field.name === "user_name") {
      const reStr = "[а-яА-Я- ]+";
      if (field.value) {
        field.value = field.value
          .toLowerCase()
          .replace(/([ \-])\1+/gu, function (str, match) {
            return match[0];
          });
        field.value = capitalize(field.value);
      }
      if (new RegExp(`${reStr}`, "u").test(field.value)) {
        field.setCustomValidity("");
      } else {
        field.setCustomValidity(
          "только кириллица в любом регистре, дефис и пробел."
        );
      }
    }
  };

  inputs.forEach((item) =>
    item.forEach((element) =>
      element.addEventListener("blur", (event) => validateField(event))
    )
  );
};

export default handleValidation;
