const today = new Date();
let year = today.getFullYear();

let yearElement = document.querySelector("#lastModifed")
yearElement.textContent = year.toString();

let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector(".lastModified")

if(lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`
}