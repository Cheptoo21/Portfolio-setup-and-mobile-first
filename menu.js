const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar_menu');
const navBar = document.querySelector('.navbar');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.add('no-scroll');
  body.classList.add('no-scroll');
});
document.querySelectorAll('.navbar_menu_link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('no-scroll');
}));

// Local Storage //
const nameInput = document.querySelector('#name-id');
const emailInput = document.querySelector('#email-id');
const textInput = document.querySelector('#text-area');

function storeData() {
  const formData = {
    username: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

const inputSaved = [nameInput, emailInput, textInput];
inputSaved.forEach((input) => {
  input.addEventListener('input', storeData);
});

const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  nameInput.value = savedData.username;
  emailInput.value = savedData.email;
  textInput.value = savedData.text;
}
