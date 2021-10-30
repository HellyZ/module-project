// const validate = (
//   fieldValue,
//   replacePattern,
//   clearDoubleSigns,
//   clearNotAllowed
// ) => {
//   fieldValue.value = fieldValue.value
//     .replace(clearDoubleSigns, (str, match) => {
//       return match[0];
//     })
//     .replace(clearNotAllowed, "");
//   if (replacePattern.test(fieldValue.value)) {
//     return {
//       isInputValid: true,
//       errorMessage: "",
//     };
//   } else {
//     return {
//       isInputValid: false,
//       errorMessage: fieldValue.title,
//     };
//   }
// };


const handleValidation = (event) => {
  const form1Inputs = document.querySelectorAll("#form1 input");
  const form2Inputs = document.querySelectorAll("#form2 input");
  const form3Inputs = document.querySelectorAll("#form3 input");
  const formCalcInputs = document.querySelectorAll(".calc-block input");

  const validateField = () => {
    let field = event.target;
    if (field.name == "user_email") {
      console.log(field.value);
      // только  латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
      const pattern = /[a-zA-Z@_.\!~*'-]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[ \^!#$%&]/g, "");
  
      if (pattern.test(field.value)) {
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        return {
          isInputValid: false,
          errorMessage: field.title,
        };
      }
    }
  
    if (field.name == "user_message") {
      // только  латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
      const pattern = /[а-яА-Я- ]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[^0-9а-яА-Я- ]/g, "");
  
      if (pattern.test(field.value)) {
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        return {
          isInputValid: false,
          errorMessage: field.title,
        };
      }
    }
  
    if (field.name == "user_phone") {
      const pattern = /[0-9\-\(\)]+/;
      field.value = field.value
        .replace(/([ \-])\1+/g, function (str, match) {
          return match[0];
        })
        .replace(/[^0-9\-\(\)]/g, "");
  
      if (pattern.test(field.value)) {
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        return {
          isInputValid: false,
          errorMessage: field.title,
        };
      }
    }
  }
  
  

  form2Inputs.forEach((item) => item.addEventListener("blur", validateField));
}

export default handleValidation;
