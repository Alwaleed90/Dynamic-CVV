// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
      ctaButton.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector("#about");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Animate sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.add("fade-out");
      observer.observe(section);
    });
  });
  
