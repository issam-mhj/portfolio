// Menu Toggle for Mobile
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navToggle.classList.toggle("active");
});

// Close Mobile Menu when a nav link is clicked
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.classList.remove("active");
  });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__list a[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.nav__list a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  });
});

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

// Add scroll reveal to different sections
sr.reveal(".home__data", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".about__img", { delay: 300 });
sr.reveal(".about__content", { delay: 400 });
sr.reveal(".skills__category", { interval: 200 });
sr.reveal(".project__card", { interval: 200 });
sr.reveal(".contact__form", { delay: 300 });
sr.reveal(".contact__info", { delay: 400 });
