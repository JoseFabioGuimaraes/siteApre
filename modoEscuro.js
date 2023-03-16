const darkModeBtn = document.querySelector('#dark-mode-btn');
const body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = 'Modo claro';
  } else {
    darkModeBtn.textContent = 'Modo escuro';
  }
});