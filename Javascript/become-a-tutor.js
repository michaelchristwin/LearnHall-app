const formElement = document.querySelector(".become-a-tutor-form");
const blurSectionElement = document.querySelector(".thank-you-background");
const closeHamburgerElement = document.querySelector(".close-hamburger img");
const inputsElement = document.querySelectorAll("input");
const textareaElements = document.querySelectorAll("textarea");

console.log(textareaElements);

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  inputsElement.forEach((input) => (input.value = ""));
  textareaElements.forEach((textarea) => (textarea.value = ""));
  blurSectionElement.classList.remove("none");
});

closeHamburgerElement.addEventListener("click", () => {
  blurSectionElement.classList.add("none");
});
