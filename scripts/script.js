//hamburgermenu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

//nightmode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const anchorTags = document.querySelector("a");
const list = document.querySelector("li");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌙")) {
    main.style.background = "#000";
    main.style.color = "white";
    modeButton.textContent = "☀️";
    // anchorTags.style.color = "white";
    // list.style.color = "black";
  } else {
    main.style.background = "white";
    main.style.color = "black";
    modeButton.textContent = "🌙";
  }
});

//visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
