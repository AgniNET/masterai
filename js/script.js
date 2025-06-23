// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

// ===== DARK MODE TOGGLE (Optional toggle button with 🌗) =====
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// ===== LOADER FADE-OUT =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = "none", 500);
  }
});

// ===== OPTIONAL: SCROLL TO TARGET SMOOTHLY =====
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
