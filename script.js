// ===== DOM READY =====
document.addEventListener("DOMContentLoaded", () => {

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

      // close mobile menu after click
      navLinksContainer.classList.remove("active");
    });
  });


  // ===== CONTACT FORM VALIDATION =====
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields!");
        e.preventDefault();
      } else {
        alert(`Thank you ${name}! Message sent successfully.`);
      }
    });
  }


  // ===== SCROLL TO TOP BUTTON =====
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // ===== ACTIVE NAV LINK ON SCROLL =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });


  // ===== DARK MODE TOGGLE =====
  const btn = document.getElementById("darkModeToggle");

  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      btn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
    });
  }


  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links");

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active");
    });
  }

});