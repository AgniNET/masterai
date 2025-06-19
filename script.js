// AOS (Animate on Scroll) initialization
AOS.init({
  duration: 800, // animation speed in ms
  easing: 'ease-in-out',
  once: true // animations run only once
});

// Scroll shrink effect for navbar (optional)
window.addEventListener('scroll', function () {
  const nav = document.querySelector('header');
  nav.classList.toggle('scrolled', window.scrollY > 10);
});
