"use strict;";

const domArrowUp = document.getElementById("domArrowUp");
const domArrowDown = document.getElementById("domArrowDown");
const domSliderWrapper = document.getElementById("slides-wrapper");
const domAsideWrapper = document.getElementById("aside-container");

let imgCurrentIndex = 0;

let tempAside;
let nextAside;

const imgArr = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//EVENTS
domArrowDown.addEventListener("click", () => slideImgChanger("next"));
domArrowUp.addEventListener("click", () => slideImgChanger("prev"));

//GENERATE DOM ELEMENTS
imgArr.forEach((tempImg, index) => {
  const tempSliderImg = document.createElement("img");
  const tempSliderTitle = document.createElement("h1");
  const tempSliderText = document.createElement("p");
  const tempContainer = document.createElement("div");
  const tempAisdeImg = document.createElement("img");
  const tempAisdeContainer = document.createElement("div");
  //Slider
  tempSliderTitle.textContent = tempImg.title;
  tempSliderText.textContent = tempImg.text;
  if (index === imgCurrentIndex) {
    tempContainer.classList.add("active-img");
    tempAisdeContainer.classList.add("active-slide");
  }
  tempSliderImg.src = tempImg.image;
  tempContainer.classList.add("slide-container");
  tempSliderImg.classList.add("slider-img");
  tempSliderTitle.classList.add("slider-title");
  tempSliderText.classList.add("slider-text");
  tempContainer.append(tempSliderImg, tempSliderTitle, tempSliderText);
  domSliderWrapper.appendChild(tempContainer);

  //Aside
  tempAisdeContainer.appendChild(tempAisdeImg);
  tempAisdeContainer.classList.add("side-img");
  tempAisdeImg.src = tempImg.image;
  domAsideWrapper.appendChild(tempAisdeContainer);
});

//SELECT ALL ELEMENTS
const slideElements = document.querySelectorAll(".slide-container");
const asideElements = document.querySelectorAll(".side-img");

//ELEMENTS SWITCHER
function elementsSwitcher(type) {
  if (type === "remove") {
    slideElements[imgCurrentIndex].classList.remove("active-img");
    asideElements[imgCurrentIndex].classList.remove("active-slide");
  } else {
    slideElements[imgCurrentIndex].classList.add("active-img");
    asideElements[imgCurrentIndex].classList.add("active-slide");
  }
}

//CHANGE IMG WITH ARROWS
function slideImgChanger(direction) {
  clearInterval(autoImg);
  elementsSwitcher("remove");
  if (direction === "next") {
    if (imgCurrentIndex === slideElements.length - 1) {
      imgCurrentIndex = 0;
    } else {
      imgCurrentIndex++;
    }
  } else if (direction === "prev") {
    if (imgCurrentIndex === 0) {
      imgCurrentIndex = 4;
    } else {
      imgCurrentIndex--;
    }
  }
  elementsSwitcher("add");
}

//AUTO CHANGE
const autoImg = setInterval(() => {
  slideImgChanger("next");
}, 5000);
