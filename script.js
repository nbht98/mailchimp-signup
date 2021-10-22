const passwordVisibility = () => {
  let icon = document.getElementById("visibility-icon");
  let text = document.getElementById("show");
  let password = document.getElementById("password");
  if (text.innerHTML === "Hide") {
    text.innerHTML = "Show";
    icon.innerHTML = "visibility_off";
    password.type = "text";
  } else {
    text.innerHTML = "Hide";
    icon.innerHTML = "visibility";
    password.type = "password";
  }
};

const checkValid = (password, element, validation) => {
  if (validation) {
    if (password.value.match(validation)) {
      element.classList.add("valid");
      return true;
    } else {
      element.classList.remove("valid");
      return false;
    }
  }
  if (password.value.length >= 8) {
    element.classList.add("valid");
    return true;
  } else {
    element.classList.remove("valid");
    return false;
  }
};

const validate = () => {
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let specialCharacter = document.getElementById("special");
  let length = document.getElementById("length");
  let isSuccess = true;
  // Validate special character
  let specials = /[^A-Za-z0-9]/g;
  isSuccess = checkValid(password, specialCharacter, specials) && isSuccess;
  // console.log(checkValid(password, specialCharacter, specials))
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  isSuccess = checkValid(password, letter, lowerCaseLetters) && isSuccess;
  // console.log(checkValid(password, letter, lowerCaseLetters))

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  isSuccess = checkValid(password, capital, upperCaseLetters) && isSuccess;

  // Validate numbers
  let numbers = /[0-9]/g;
  isSuccess = checkValid(password, number, numbers) && isSuccess;

  // Validate length
  isSuccess = checkValid(password, length) && isSuccess;

  const success = document.querySelector(".success");
  const ul = document.querySelector("ul");

  if (isSuccess) {
    success.classList.remove("hide");
    ul.classList.add("hide");
    document.getElementById("create-account").disabled = false;
  } else {
    ul.classList.remove("hide");
    success.classList.add("hide");
    document.getElementById("create-account").disabled = true;
  }
};

const password = document.getElementById("password");
password.addEventListener("keyup", validate);

const visibility = document.querySelector(".visibility");
visibility.addEventListener("click", passwordVisibility);

const username = document.getElementById("username");

username.addEventListener("focus", () => {
  const visibility = document.querySelector(".field-help");
  visibility.style.opacity = 1;
  visibility.style.margin = "10px 0 60px 0";
});
username.addEventListener("focusout", () => {
  const visibility = document.querySelector(".field-help");
  visibility.style.opacity = 0;
  visibility.style.margin = "10px 0 0 0";
});


window.onload= () => {
  document.getElementById("create-account").disabled=true;
}