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

  if (event.key === "ArrowLeft") {
    mouse.style.left = `${xPosition - mouse.offsetWidth}px`;
  } else if (event.key === "ArrowRight") {
    mouse.style.left = `${xPosition + mouse.offsetWidth}px`;
  } else if (event.key === "ArrowDown") {
    mouse.style.top = `${yPosition + mouse.offsetHeight}px`;
  } else if (event.key === "ArrowUp") {
    mouse.style.top = `${yPosition - mouse.offsetHeight}px`;
  }
});
