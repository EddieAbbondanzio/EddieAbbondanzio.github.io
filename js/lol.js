const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");

if (hamburger && hamburgerMenu) {
  hamburger.addEventListener("click", e => {
    hamburgerMenu.classList.add("active")
    e.stopPropagation();
  });

  window.addEventListener("click", ev => {
    if(!ev.target.closest("#hamburger-menu")) {
      hamburgerMenu.classList.remove("active")
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
