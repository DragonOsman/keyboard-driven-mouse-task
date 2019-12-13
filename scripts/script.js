"use strict";

const mouse = document.getElementById("mouse");

mouse.tabIndex = 0;
mouse.addEventListener("click", () => {
  const mouseCoords = mouse.getBoundingClientRect();
  mouse.style.left = `${mouseCoords.left}px`;
  mouse.style.top = `${mouseCoords.top}px`;
  mouse.style.position = "fixed";
});

mouse.addEventListener("keydown", event => {
  event.preventDefault();

  const xPosition = parseInt(mouse.style.left);
  const yPosition = parseInt(mouse.style.top);

  let leftCoord = xPosition - mouse.offsetWidth;
  let rightCoord = xPosition + mouse.offsetWidth;
  let downCoord = yPosition + mouse.offsetHeight;
  let upCoord = yPosition - mouse.offsetHeight;

  if (event.key === "ArrowLeft") {
    if (leftCoord < 0) {
      leftCoord = 0;
    }

    mouse.style.left = `${leftCoord}px`;
  } else if (event.key === "ArrowRight") {
    if (rightCoord > window.offsetWidth - mouse.offsetWidth) {
      rightCoord = window.offseWidth - mouse.offsetWidth;
    }

    mouse.style.left = `${rightCoord}px`;
  } else if (event.key === "ArrowDown") {
    if (downCoord > window.offsetHeight - mouse.offsetHight) {
      downCoord = window.offsetHeight - mouse.offsetHeight;
    }

    mouse.style.top = `${downCoord}px`;
  } else if (event.key === "ArrowUp") {
    if (upCoord < 0) {
      upCoord = 0;
    }

    mouse.style.top = `${upCoord}px`;
  }
});
