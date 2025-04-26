// Toggle Dark/Light Mode
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});
