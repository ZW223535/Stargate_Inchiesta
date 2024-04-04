let img;
let cassaImg;
let cassaHoverImg;
let loadingOverlay;
let tv;
let tvhover;
let bacheca;
let bachecahover;

let isHovering = false; //Track if cassa.png is hovering
let cassaClicked = false; // Track if cassa.png is clicked
let isHoveringtv = false; //Track if tv.png is hovering
let tvClicked = false; // Track if tv.png is clicked
let bachecahovering = false; //Track if bacheca.png is hovering
let bachecaclick = false; // Track if bacheca.png is clicked

function preload() {
  // Load your media assets here
  img = loadImage("assets/BG.png");
  cassaImg = loadImage("assets/Cassa.png");
  cassaHoverImg = loadImage("assets/Cassa_Hover.png");
  tv = loadImage("assets/tv.png");
  tvhover = loadImage("assets/tv_hover.png");
  bacheca = loadImage("assets/bacheca.png");
  bachecahover = loadImage("assets/bacheca_hover.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.style.display = "none";
}

function draw() {
  background(img);

  if (
    mouseX > windowWidth - windowWidth / 4 &&
    mouseX < windowWidth - windowWidth / 4 + 277 &&
    mouseY > windowHeight - 320 &&
    mouseY < windowHeight - 320 + 355
  ) {
    // Draw cassaHoverImg when the mouse is over "Cassa.png"
    image(
      cassaHoverImg,
      windowWidth - windowWidth / 4,
      windowHeight - 320,
      277,
      355
    );
    cursor(HAND); // Change cursor to indicate it's clickable
    isHovering = true;
  } else {
    // Draw Cassa.png when the mouse is not over it
    image(
      cassaImg,
      windowWidth - windowWidth / 4,
      windowHeight - 320,
      277,
      355
    );
    isHovering = false;
  }

  if (
    mouseX > windowWidth / 4 &&
    mouseX < windowWidth / 4 + 431 &&
    mouseY > windowHeight / 3.5 &&
    mouseY < windowHeight / 3.5 + 500
  ) {
    image(bachecahover, windowWidth / 4, windowHeight / 3.5, 431, 500);
    cursor(HAND); // Change cursor to indicate it's clickable
    bachecahovering = true;
  } else {
    image(bacheca, windowWidth / 4, windowHeight / 3.5, 431, 500);
    bachecahovering = false;
  }

  if (
    mouseX > windowWidth / 7 &&
    mouseX < windowWidth / 7 + 277 * 1.2 &&
    mouseY > windowHeight - 350 &&
    mouseY < windowHeight - 350 + 355 * 1.2
  ) {
    // Draw tvhover when the mouse is over "tv.png"
    image(tvhover, windowWidth / 7, windowHeight - 350, 277 * 1.2, 355 * 1.2);
    cursor(HAND); // Change cursor to indicate it's clickable
    isHoveringtv = true;
  } else {
    // Draw tv.png when the mouse is not over it
    image(tv, windowWidth / 7, windowHeight - 350, 277 * 1.2, 355 * 1.2);
    isHoveringtv = false;
  }

  if (!isHovering && !isHoveringtv && !bachecahovering) {
    cursor(ARROW);
  }
}

function mouseClicked() {
  // Check if the mouse is clicked within the region of "Cassa.png"
  if (
    mouseX > windowWidth - windowWidth / 4 &&
    mouseX < windowWidth - windowWidth / 4 + 277 &&
    mouseY > windowHeight - 320 &&
    mouseY < windowHeight - 320 + 355
  ) {
    window.open("Cassa.html", "_self");
  }

  // Check if the mouse is clicked within the region of "tv.png"
  if (
    mouseX > windowWidth / 7 &&
    mouseX < windowWidth / 7 + 277 * 1.2 &&
    mouseY > windowHeight - 350 &&
    mouseY < windowHeight - 350 + 355 * 1.2
  ) {
    window.open("Tv.html", "_self");
  }

  if (
    mouseX > windowWidth / 4 &&
    mouseX < windowWidth / 4 + 431 &&
    mouseY > windowHeight / 3.5 &&
    mouseY < windowHeight / 3.5 + 500
  ) {
    window.open("Bacheca.html", "_self");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
