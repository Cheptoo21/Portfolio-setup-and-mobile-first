const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar_menu');
const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});
document.querySelectorAll('.navbar_menu_link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));