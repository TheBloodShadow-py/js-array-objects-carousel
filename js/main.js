"use strict;";

const domArrowUp = document.getElementById("domArrowUp");
const domArrowDown = document.getElementById("domArrowDown");
const domSliderImg = document.querySelector(".slider-img");

let tempAside;
let nextAside;

document.onload = hiddenSpin();

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

domArrowDown.addEventListener("click", nextImg);
domArrowUp.addEventListener("click", prevImg);

let isMoving = false;

document.addEventListener("mousemove", () => {
  isMoving = true;
});

setInterval(() => {
  if (!isMoving) {
    nextImg();
  } else {
    isMoving = false;
  }
}, 2000);

function prevImg() {
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(imgArr, currentSrcImg);
  domSliderImg.classList.add("fade-out");
  setTimeout(() => {
    if (currentPosition === 0) {
      domSliderImg.src = imgArr[4];
    } else {
      domSliderImg.src = imgArr[currentPosition - 1];
    }
    domSliderImg.classList.remove("fade-out");
    domSliderImg.classList.add("fade-in");
  }, 300);

  if (currentPosition === 4) {
    tempAside = document.querySelector(".side-img-0");
    nextAside = document.querySelector(".side-img-4");
  } else if (currentPosition === 3) {
    tempAside = document.querySelector(".side-img-4");
    nextAside = document.querySelector(".side-img-3");
  } else if (currentPosition === 2) {
    tempAside = document.querySelector(".side-img-3");
    nextAside = document.querySelector(".side-img-2");
  } else if (currentPosition === 1) {
    tempAside = document.querySelector(".side-img-2");
    nextAside = document.querySelector(".side-img-1");
  } else if (currentPosition === 0) {
    tempAside = document.querySelector(".side-img-1");
    nextAside = document.querySelector(".side-img-0");
  }
  tempAside.classList.add("gray-scale");
  nextAside.classList.remove("gray-scale");

  domSliderImg.classList.remove("fade-in");

  return;
}

function nextImg() {
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(imgArr, currentSrcImg);
  domSliderImg.classList.add("fade-out");
  setTimeout(() => {
    if (currentPosition === 4) {
      domSliderImg.src = imgArr[0];
    } else {
      domSliderImg.src = imgArr[currentPosition + 1];
    }
    domSliderImg.classList.remove("fade-out");
    domSliderImg.classList.add("fade-in");
  }, 300);
  if (currentPosition === 4) {
    tempAside = document.querySelector(".side-img-0");
    nextAside = document.querySelector(".side-img-1");
  } else if (currentPosition === 0) {
    tempAside = document.querySelector(".side-img-1");
    nextAside = document.querySelector(".side-img-2");
  } else if (currentPosition === 1) {
    tempAside = document.querySelector(".side-img-2");
    nextAside = document.querySelector(".side-img-3");
  } else if (currentPosition === 2) {
    tempAside = document.querySelector(".side-img-3");
    nextAside = document.querySelector(".side-img-4");
  } else if (currentPosition === 3) {
    tempAside = document.querySelector(".side-img-4");
    nextAside = document.querySelector(".side-img-0");
  }
  tempAside.classList.add("gray-scale");
  nextAside.classList.remove("gray-scale");
  domSliderImg.classList.remove("fade-in");
  return;
}

function searchPosition(arr, src) {
  for (let i = 0; i < arr.length; i++) {
    if (src.endsWith(arr[i].image)) {
      return i;
    }
  }
  return console.log(`not found in this array: ${arr}`);
}

function hiddenSpin() {
  setTimeout(() => {
    const spinner = document.querySelector(".loader");
    spinner.classList.remove("opacity-100");
    spinner.classList.add("opacity-0");
    setTimeout(() => {
      spinner.classList.add("hidden");
    }, 500);
  }, 1500);
}
