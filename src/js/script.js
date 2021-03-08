document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.header__nav--mobile'),
    mobileLink = mobileMenu.querySelectorAll('.nav__list--link'),
    burger = document.querySelector('.burger'),
    body = document.querySelector('body');

  mobileLink.forEach(item => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active');
      body.classList.toggle('lock');
      mobileMenu.classList.toggle('active');
    });
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('lock');
  });
});