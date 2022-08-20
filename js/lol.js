const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");

if (hamburger && hamburgerMenu) {
  hamburger.addEventListener("click", e => {
    hamburgerMenu.classList.toggle("active");
    e.stopPropagation();
  });

  window.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("active")) {
      hamburgerMenu.classList.remove("active");
    }
  });
}
