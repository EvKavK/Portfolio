const handleMouseEnter = (event) => {
  event.target.style.backgroundColor = "#ffa500";
};

const handleMouseLeave = (event) => {
  event.target.style.backgroundColor = "";
};

const handleInputChange = (event) => {
  const isValid = event.target.value.length > 3;
  const submitButton = document.querySelector(".submit-btn");
  submitButton.disabled = !isValid;
};

const addEventListeners = () => {
  const submitButton = document.querySelector(".submit-btn");
  const inputField = document.querySelector("input");

  submitButton.addEventListener("mouseenter", handleMouseEnter);
  submitButton.addEventListener("mouseleave", handleMouseLeave);

  inputField.addEventListener("input", handleInputChange);
};

document.addEventListener("DOMContentLoaded", addEventListeners);