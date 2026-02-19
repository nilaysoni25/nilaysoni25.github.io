// MOBILE NAVBAR TOGGLE
const menuIcon = document.getElementById("menuIcon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// ACTIVE LINK CHANGE ON CLICK
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close navbar after clicking (mobile)
    navbar.classList.remove("show");
  });
});

// ACTIVE LINK CHANGE ON SCROLL
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));

    if (section) {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});
// HOME SECTION
// ================= PROJECT FILTER SYSTEM =================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (card.classList.contains(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Default: Show PowerBI first
window.addEventListener("load", () => {
  projectCards.forEach(card => {
    if (card.classList.contains("powerbi")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


