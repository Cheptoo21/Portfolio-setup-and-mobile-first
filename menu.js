const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar_menu');
const navBar = document.querySelector('.navbar');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.add('no-scroll');
});

document.querySelectorAll('.navbar_menu_link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('no-scroll');
}));

// form validation //
const form = document.querySelector('.contactForm');
const email = document.getElementById('userEmail');
const error = document.querySelector('.error');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    error.textContent = 'Please ensure your email is in Lower case'; 
  }
});

