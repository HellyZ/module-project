const handleValidation = (event) => {
  const form1Inputs = document.querySelectorAll("#form1 input");
  const form2Inputs = document.querySelectorAll("#form2 input");
  const form3Inputs = document.querySelectorAll("#form3 input");

  document.querySelectorAll('*[id^="form"]').forEach((formEl) =>
    formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      let form = event.target;
      let inputs = form.querySelectorAll("input");

      let formData = [];
      inputs.forEach((el) => {
        formData.push(el.value);
      });
    })
  );

  const validateField = (event) => {
    let field = event.target;

    if (field.name == "user_email") {
      const pattern = /[a-zA-Z@_.\!~*'-]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[ \^!#$%&]/g, "");

      if (pattern.test(field.value)) {
        console.log("user_email: true");
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        console.log("user_email: false");
        event.preventDefault();
        return {
          isInputValid: false,
          errorMessage: field.title,
        };
      }
    } else if (
      field.name == "user_message" &&
      field.placeholder == "Ваше сообщение"
    ) {
      const pattern = /[а-яА-Я- ]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[^0-9а-яА-Я- ]/g, "");

      if (pattern.test(field.value)) {
        console.log("user_message: true");
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        console.log("user_message: false");
        event.preventDefault();
        return {
          isInputValid: false,
          errorMessage: field.title,
        };
      }
    } else if (field.name == "user_phone") {
      const pattern = /[0-9\-\(\)]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[^0-9\-\(\)]/g, "");

      if (pattern.test(field.value)) {
        console.log("user_phone: true");
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        console.log("user_phone: true");
        event.preventDefault();
        return {
          isInputValid: false,
          errorMessage: field.title,
        };
      }
    } else if (field.name == "user_name") {
      const pattern = /[а-яА-Я- ]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[^0-9а-яА-Я- ]/g, "");

      if (pattern.test(field.value)) {
        console.log("user_name: true");
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        console.log("user_name: false");
        event.preventDefault();
        return {
          isInputValid: false,
          errorMessage: "только кириллица в любом регистре, дефис и пробел.",
        };
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
