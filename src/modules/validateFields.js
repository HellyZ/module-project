import { capitalize } from "./helpers";

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
    if (field.value) {
      if (
        new RegExp(
          /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ\- ]+$/,
          "g"
        ).test(field.value)
      ) {
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
    if (field.value) {
      field.value = field.value
        .toLowerCase()
        .replace(/([ \-])\1+/gu, function (str, match) {
          return match[0];
        });
      field.value = capitalize(field.value);
    }
    if (
      new RegExp(
        /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ\- ]+$/,
        "g"
      ).test(field.value)
    ) {
      field.setCustomValidity("");
    } else {
      field.setCustomValidity(
        "только кириллица в любом регистре, дефис и пробел."
      );
    }
  }
};

const initFormFieldsValidator = () => {
  document
    .querySelectorAll("form")
    .forEach((form) =>
      form
        .querySelectorAll("input")
        .forEach((inputField) =>
          inputField.addEventListener("blur", (event) => validateField(event))
        )
    );
};

export default initFormFieldsValidator;
