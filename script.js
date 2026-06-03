/* ===========================
   TYPING EFFECT
=========================== */
const phrases = [
  "cool websites.",
  "fun games.",
  "web apps.",
  "creative things.",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typedText");

function typeEffect() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* ===========================
   NAVBAR: scroll effect & active link
=========================== */
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  // Scrolled class for shadow
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active link highlight
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ===========================
   HAMBURGER MENU
=========================== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

// Close menu when a link is clicked
document.querySelectorAll(".mob-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  });
});

/* ===========================
   REVEAL ON SCROLL
=========================== */
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards in the same parent
        const siblings = entry.target.parentElement.querySelectorAll(".reveal");
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 100;
        });

        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));

/* ===========================
   SMOOTH NAV LINKS
=========================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ===========================
   PAGE TITLE TYPING
=========================== */
document.title = "Jay Salvi — Frontend Developer";
