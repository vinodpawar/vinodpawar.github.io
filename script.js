const toggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
} else if (systemPrefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

toggle.addEventListener('click', () => {
  const current =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark';

  document.documentElement.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(section => observer.observe(section));
