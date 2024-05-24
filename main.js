const form = document.getElementById("form");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
const formSection = document.querySelector(".form-section");
const checklistSection = document.querySelector(".checklist-section");

const length = document.getElementById("length");
const lowerCase = document.getElementById("lower-case");
const upperCase = document.getElementById("upper-case");
const digits = document.getElementById("digits");
const specialCharacters = document.getElementById("special-characters");

const lengthIconClassList = document.querySelector("#length i").classList;
const lowerCaseIconClassList = document.querySelector("#lower-case i").classList;
const upperCaseIconClassList = document.querySelector("#upper-case i").classList;
const digitsIconClassList = document.querySelector("#digits i").classList;
const specialCharactersIconClassList = document.querySelector("#special-characters i").classList;

const p = document.createElement("p");

const eye = document.querySelector("form i");
eye.onclick = function () {
  if (eye.classList == "fa-solid fa-eye") {
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    eye.style.right = "14px";
    pass.type = "text";
    pass.focus();
  } else {
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
    eye.style.right = "15px";
    pass.type = "password";
    pass.focus();
  }
};

let patternUpper = /[A-Z]/g;
let patternLower = /[a-z]/g;
let patternDigits = /[\d]/g;
let patternSpecial = /[@%#$]/g;

form.onsubmit = (e) => {
  e.preventDefault();

  if (
    user.value !== "" &&
    pass.value !== "" &&
    pass.value.length > 7 &&
    pass.value.match(patternLower) &&
    pass.value.match(patternUpper) &&
    pass.value.match(patternDigits) &&
    pass.value.match(patternSpecial)
  ) {
    location.reload();
  }
  if (user.value === "" || pass.value === "") {
    formSection.append(p);
    formSection.style.paddingBottom = "4px";
    const pMessage = document.querySelector(".form-section p");
    if (user.value === "" && pass.value === "") {
      pMessage.innerHTML = "please enter your usename and password";
    } else {
      user.value === "" ? (pMessage.innerHTML = "please enter your usename") : null;
      pass.value === "" ? (pMessage.innerHTML = "please enter your password") : null;
    }
  } else {
    document.querySelector(".form-section p").remove();
    formSection.style.paddingBottom = "36px";
  }
};
pass.onkeyup = () => {
  //   if ((formSection.style.top = "0")) {}
  pass.value.length > 7
    ? ((length.style.color = "#17af4c"),
      lengthIconClassList.remove("fa-xmark"),
      lengthIconClassList.add("fa-check"))
    : ((length.style.color = "#666"),
      lengthIconClassList.remove("fa-check"),
      lengthIconClassList.add("fa-xmark"));
  pass.value.match(patternLower)
    ? ((lowerCase.style.color = "#17af4c"),
      lowerCaseIconClassList.remove("fa-xmark"),
      lowerCaseIconClassList.add("fa-check"))
    : ((lowerCase.style.color = "#666"),
      lowerCaseIconClassList.add("fa-xmark"),
      lowerCaseIconClassList.remove("fa-check"));
  pass.value.match(patternUpper)
    ? ((upperCase.style.color = "#17af4c"),
      upperCaseIconClassList.remove("fa-xmark"),
      upperCaseIconClassList.add("fa-check"))
    : ((upperCase.style.color = "#666"),
      upperCaseIconClassList.add("fa-xmark"),
      upperCaseIconClassList.remove("fa-check"));
  pass.value.match(patternDigits)
    ? ((digits.style.color = "#17af4c"),
      digitsIconClassList.remove("fa-xmark"),
      digitsIconClassList.add("fa-check"))
    : ((digits.style.color = "#666"),
      digitsIconClassList.add("fa-xmark"),
      digitsIconClassList.remove("fa-check"));
  pass.value.match(patternSpecial)
    ? ((specialCharacters.style.color = "#17af4c"),
      specialCharactersIconClassList.remove("fa-xmark"),
      specialCharactersIconClassList.add("fa-check"))
    : ((specialCharacters.style.color = "#666"),
      specialCharactersIconClassList.add("fa-xmark"),
      specialCharactersIconClassList.remove("fa-check"));

  //   let x = () => {
  //     if (
  //       pass.value.length > 7 &&
  //       pass.value.match(patternLower) &&
  //       pass.value.match(patternUpper) &&
  //       pass.value.match(patternDigits) &&
  //       pass.value.match(patternSpecial)
  //     ) {
  //       checklistSection.style.display = "none";
  //     } else {
  //       checklistSection.style.display = "block";
  //     }
  //   };
  //   x();

  let checkPattern = () => {
    if (
      pass.value.length > 7 &&
      pass.value.match(patternLower) &&
      pass.value.match(patternUpper) &&
      pass.value.match(patternDigits) &&
      pass.value.match(patternSpecial)
    ) {
      checklistSection.style.opacity = "0";
      checklistSection.style.top = "300px";
      formSection.style.top = "220px";
    } else {
      checklistSection.style.opacity = "1";
      checklistSection.style.top = "380px";
      checklistSection.style.opacity = "1";
      formSection.style.top = "120px";
    }
  };
  timeOutHandler = setTimeout(checkPattern, 120);
};
