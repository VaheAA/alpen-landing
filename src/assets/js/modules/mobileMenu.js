window.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBtn = document.querySelector('#menu-btn');
  const body = document.body;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.style.display = 'flex';
    setTimeout(() => {
      mobileMenu.classList.toggle('open');
    }, 100);
    body.classList.toggle('no-scroll');
  });

  mobileMenu.addEventListener('click', (e) => {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenu.style.display = 'none';
    body.classList.remove('no-scroll');
  });
});
