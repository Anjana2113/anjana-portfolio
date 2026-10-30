// ==========================================================================
// Theme Toggle: Warm Paper (Default) & Deep Charcoal Ink
// ==========================================================================
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme-mode');

if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
} else {
  // Default to paper theme for the editorial aesthetic
  document.body.setAttribute('data-theme', 'paper');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const nextTheme = current === 'dark' ? 'paper' : 'dark';
    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme-mode', nextTheme);
  });
}

// ==========================================================================
// Mobile Menu Navigation
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ==========================================================================
// Dynamic Copyright Year
// ==========================================================================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
