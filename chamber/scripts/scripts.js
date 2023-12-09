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

//directory

const membersUrl =
  "https://vangricky.github.io/wdd230/chamber/data/members.json";
const membersCards = document.querySelector("#members-cards");

async function getMemberData() {
  const response = await fetch(membersUrl);
  const data = await response.json();
  // console.table(data.members)
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let number = document.createElement("p");
    let link = document.createElement("p");

    name.textContent = `${member.name}`;
    address.textContent = `${member.address.street}`;
    address.style.color = "#222831";
    number.textContent = `${member.phone}`;
    number.style.color = "#222831";
    link.textContent = `${member.website}`;
    link.style.color = "#222831";

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(link);

    membersCards.appendChild(card);
  });
};

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
