const formElement = document.querySelector(".book-a-session-form");
const blurSectionElement = document.querySelector(".thank-you-background");
const closeHamburgerElement = document.querySelector(".close-hamburger img");
const inputsElement = document.querySelectorAll("input");
const textareaElement = document.querySelector("textarea");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  inputsElement.forEach((input) => (input.value = ""));
  textareaElement.value = "";
  blurSectionElement.classList.remove("none");
});

closeHamburgerElement.addEventListener("click", () => {
  blurSectionElement.classList.add("none");
});
