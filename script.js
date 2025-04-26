// Light/Dark Mode Toggle
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    toggle.textContent = "☀️"; // Light mode icon
  } else {
    toggle.textContent = "🌙"; // Dark mode icon
  }
});
