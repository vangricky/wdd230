//hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

//footer
const today = new Date();
let year = today.getFullYear();

let yearElement = document.querySelector("#year");
yearElement.textContent = year.toString();

let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector(".lastModified");

if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}
