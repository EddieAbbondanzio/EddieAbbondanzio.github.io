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

const navbarDropdowns = document.querySelectorAll(".item.dropdown");
for (const nb of navbarDropdowns) {
  nb.addEventListener("pointerup", ev => {
    // Ensure we aren't blocking taps on items.
    if(ev.target.closest(".content")) {
      return
    }
    
    if (ev.pointerType === "touch") {
      nb.classList.toggle("active");
    } 
  });
}
