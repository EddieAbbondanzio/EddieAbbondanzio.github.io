// Makes hamburger buttons work.
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const navBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if (navBurgers.length > 0) {
    // Add a click event on each of them
    navBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const targetId = el.dataset.target;
        const targetElement = document.getElementById(targetId);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        targetElement.classList.toggle("is-active");
      });
    });
  }

  // Get all dropdowns on the page that aren't hoverable.
  const dropdowns = document.querySelectorAll(".dropdown:not(.is-hoverable)");

  if (dropdowns.length > 0) {
    // For each dropdown, add event handler to open on click.
    dropdowns.forEach(function(el) {
      el.addEventListener("click", function(e) {
        e.stopPropagation();
        el.classList.toggle("is-active");
      });
    });

    // If user clicks outside dropdown, close it.
    document.addEventListener("click", function(e) {
      closeDropdowns();
    });
  }

  /*
   * Close dropdowns by removing `is-active` class.
   */
  function closeDropdowns() {
    dropdowns.forEach(function(el) {
      el.classList.remove("is-active");
    });
  }

  // Close dropdowns if ESC pressed
  document.addEventListener("keydown", function(event) {
    let e = event || window.event;
    if (e.key === "Esc" || e.key === "Escape") {
      closeDropdowns();
    }
  });
});
