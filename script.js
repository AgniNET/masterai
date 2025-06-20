// === AOS Animation Init ===
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// === Navbar Scroll Shadow ===
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

// === Load Dark Mode on Page Load ===
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

// === Ripple Effect on Buttons ===
document.addEventListener('click', function (e) {
  const btn = e.target.closest('button, .tool-btn, .cta');
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

// === Sidebar Toggle ===
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    const isOpen = sidebar.style.right === "0px";
    sidebar.style.right = isOpen ? "-250px" : "0px";
  }
}

// === Loader Show on Tool Click ===
function showLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "flex";
}

// === Hide Loader on Back Navigation ===
window.addEventListener('pageshow', () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// === Smooth Scroll to Anchors ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
