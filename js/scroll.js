document.addEventListener("DOMContentLoaded", () => {

  // ===== Smooth scroll =====
  document.querySelector("a[href='#home']").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("a[href='#about']").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("a[href='#projects']").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("a[href='#contacts']").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#contacts").scrollIntoView({ behavior: "smooth" });
  });

  // ===== Scroll to top =====
  const goup = document.getElementById("goup");
  if (goup) {
    goup.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });


    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }
});
