document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.burger-menu');
  const closeMenuBtn = document.querySelector('.burger-menu-close');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (link.closest('.backdrop')) {
        toggleMenu(false);
      }
    });
  });

  function toggleMenu(show) {
    openMenuBtn.style.display = show ? 'none' : 'block';
    closeMenuBtn.style.display = show ? 'block' : 'none';
    backdrop.classList.toggle('show', show);
  }

  openMenuBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });
});