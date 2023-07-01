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

// popup //

// const popup = document.querySelector('.popup_window');
// const closeBtn = document.querySelector('.close');
// const pop = document.querySelector('.pop');

// document.querySelectorAll('.see-proj').forEach((n) => n.addEventListener('click', () => {
//   popup.style.display = 'block';
//   pop.style.filter = 'blur(5px)';
// }));

// function close() {
//   popup.style.display = 'none';
//   pop.style.filter = 'blur(0px)';
// }
// closeBtn.addEventListener('click', close);

// function closePop(event) {
//   if (event.target.className === 'popup_window') {
//     popup.style.display = 'none';
//     pop.style.filter = 'blur(0px)';
//   }
// }
// popup.addEventListener('click', closePop);

// ];
// // Event listener for See Project Button:
// /*projectArr.forEach((project) => {
//   const showBtn = document.getElementById(`project-${project.id}`);
//   showBtn.addEventListener('click', () => {
//     const showPop = document.getElementById(`popup-${project.id}`);
//     showPop.style.display = 'flex';
//   });
// });

// projectArr.forEach((project) => {
//   const closeBtn = document.getElementById(`closeBtn-${project.id}`);
//   closeBtn.addEventListener('click', () => {
//     const showpop2 = document.getElementById(`popup-${project.id}`);
//     showpop2.style.display = 'none';
//   });
// });

// projectArr.forEach((project) => {
//   const deskCloseBtn = document.getElementById(`deskCloseBtn-${project.id}`);
//   deskCloseBtn.addEventListener('click', () => {
//     const showpop3 = document.getElementById(`popup-${project.id}`);
//     showpop3.style.display = 'none';
//   });
// });

const myWorksSection = document.querySelector('.works_content');
const projectList = [
  {
    id: 1,
    title: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './logo/Img Placeholder.png',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './logo/Img Placeholder.png',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './logo/Img Placeholder.png',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './logo/Img Placeholder.png',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    title: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './logo/Img Placeholder.png',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 6,
    title: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './logo/Img Placeholder.png',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const htmlStructure = (id, title, technologies) => `<div class="container1">
        <div class="container2">
          <h3>${title}</h3>
          <ul class="list-language">
            <li class="languages">${technologies[0]}</li>
            <li class="languages">${technologies[1]}</li>
            <li class="languages">${technologies[2]}</li>
            <li class="languages">${technologies[3]}</li>
          </ul>
          <div class="container2-btn">
            <button type="button" id="project-${id}" class="see-project click">See Project</button>
          </div>
        </div>
      </div>`;
projectList.forEach((project) => {
  myWorksSection.innerHTML += htmlStructure(
    project.id,
    project.title,
    project.technologies,
  );
});

// Start of popup section
const popup = (id, title, description, imageLink, technologies, liveLink, sourceLink) => `<div class="overlay" id="popup-${id}">
    <div class="popupContainer">
      <div class="popupImgContainer1">
        <img class="popupImg" src="logo/mobile snap.png" alt="Mobile snapshoot">
      </div>
      <div class="closeBtnContainer">
        <button class="closeBtn" id="closeBtn-${id}">&times</button>
        <img class="desktopCloseBtn" src="./logo/Icon - Cancel.png" id="deskCloseBtn-${id}"/>
      </div>
      <div class="popDiv">
        <div class="popDiv1">
          <h1 class="popHeading">${title}</h1>
          <ul class="techList">
            <li class="techItem">${technologies[0]}</li>
            <li class="techItem">${technologies[1]}</li>
            <li class="techItem">${technologies[2]}</li>
          </ul>
        </div>
        <div class="popDiv2">
          <p class="popPara">${description}</p>
        </div>
        <div class="popDiv3 popupBtnContainer">
          <button class="popupBtn">
            <a href="${liveLink}">See Live</a>
            <img src="./logo/Icon - Export.svg"/>
          </button>
          <button class="popupBtn">
            <a href="${sourceLink}">See Source</a>
            <img src="./logo/Frame.png"/>
          </button>
        </div> 
      </div>
    </div>
  </div>`;

projectList.forEach((project) => {
  myWorksSection.innerHTML += popup(
    project.id,
    project.title,
    project.description,
    project.imageLink,
    project.technologies,
    project.liveLink,
    project.sourceLink,
  );
});

// Event listener for See Project Button:
projectList.forEach((project) => {
  const showBtn = document.getElementById(`project-${project.id}`);
  showBtn.addEventListener('click', () => {
    const showPop = document.getElementById(`popup-${project.id}`);
    showPop.style.display = 'flex';
  });
});

projectList.forEach((project) => {
  const closeBtn = document.getElementById(`closeBtn-${project.id}`);
  closeBtn.addEventListener('click', () => {
    const showpop2 = document.getElementById(`popup-${project.id}`);
    showpop2.style.display = 'none';
  });
});

projectList.forEach((project) => {
  const deskCloseBtn = document.getElementById(`deskCloseBtn-${project.id}`);
  deskCloseBtn.addEventListener('click', () => {
    const showpop3 = document.getElementById(`popup-${project.id}`);
    showpop3.style.display = 'none';
  });
});