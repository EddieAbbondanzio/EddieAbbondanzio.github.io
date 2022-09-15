const text = document.getElementById("logo-404");

function randomizeColor() {
  text.style.color = `rgb(${randomByte()}, ${randomByte()}, ${randomByte()})`;
}

function randomByte() {
  return Math.floor(Math.random() * 256);
}

text.addEventListener("click", randomizeColor);
randomizeColor();
