"use strict";

let night = document.querySelector(".fa-moon");

night.addEventListener("click", () => {
  // card background
  document.querySelector(".card").classList.toggle("bg");

  //   icon colors
  let icons = document.querySelectorAll(".fab");
  for (let icon of icons) {
    icon.classList.toggle("light");
  }

  //   sun => moon or moon => sun
  night.classList.toggle("fa-moon");
  night.classList.toggle("fa-sun");
});
