// === AOS Animation Init ===
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// === Navbar Scroll Effect ===
window.addEventListener('scroll', function () {
  const nav = document.querySelector('header');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
});

// === Dark Mode Toggle ===
function toggleDark() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// === Load Dark Mode Preference ===
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

// === Ripple Click Effect ===
document.addEventListener('click', function (e) {
  const btn = e.target.closest('button, .tool-btn');
  if (!btn) return;

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  btn.appendChild(ripple);

  const d = Math.max(btn.clientWidth, btn.clientHeight);
  ripple.style.width = ripple.style.height = `${d}px`;
  ripple.style.left = `${e.offsetX - d / 2}px`;
  ripple.style.top = `${e.offsetY - d / 2}px`;

  setTimeout(() => ripple.remove(), 600);
});

// === Smooth Scroll for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Loader Show ===
function showLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "flex";
}

// === Loader Hide on Back Navigation (Fix for browser Back) ===
window.addEventListener('pageshow', () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});
