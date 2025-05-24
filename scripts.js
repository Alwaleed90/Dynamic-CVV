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
  
 // script.js

document.addEventListener("DOMContentLoaded", function () {
  // إعداد EmailJS بمفتاحك العام
  emailjs.init("DprpJyAkzXqUhB8B9"); // استبدل YOUR_PUBLIC_KEY بالمفتاح الحقيقي من لوحة التحكم

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_x947t47", "template_ytvdkwj", form)
      .then(
        () => {
          status.textContent = "✔️ Message sent successfully!";
          status.style.color = "green";
          form.reset();
        },
        (error) => {
          console.error("Send failed", error);
          status.textContent = "❌ Send failed. Try again.";
          status.style.color = "red";
        }
      );
  });
});

