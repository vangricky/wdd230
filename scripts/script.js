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

//dynamic weather
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.80&appid=83cfd6376f4f3dc4b8900a19166fa46f&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  weatherIcon.setAttribute("loading", "lazy");
  captionDesc.textContent = `${desc}`;
}
