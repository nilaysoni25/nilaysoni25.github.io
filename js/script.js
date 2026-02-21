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

// PROJECT FILTER SYSTEM
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Get filter value
    const filterValue = button.getAttribute("data-filter");

    // Show/Hide cards
    projectCards.forEach(card => {
      if (card.classList.contains(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Default show Power BI projects only
window.addEventListener("load", () => {
  projectCards.forEach(card => {
    if (card.classList.contains("powerbi")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
// DASHBOARD VIEW MODAL
const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.getElementById("dashboardModal");
const modalImg = document.getElementById("modalImage");

viewButtons.forEach(button => {
  button.addEventListener("click", () => {
    const imgSrc = button.getAttribute("data-img");
    modalImg.src = imgSrc;
    modal.classList.add("active");
  });
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target !== modalImg) {
    modal.classList.remove("active");
  }
});
