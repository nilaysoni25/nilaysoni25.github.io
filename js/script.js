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
