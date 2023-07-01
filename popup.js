// popup //

const popUp = document.querySelector('.popup_window');
const closeBtn = document.querySelector('.close');
const pop = document.querySelector('.pop');

document.querySelectorAll('.see-project').forEach((n) => n.addEventListener('click', () => {
  popUp.style.display = 'block';
  pop.style.filter = 'blur(5px)';
}));
function close() {
  popUp.style.display = 'none';
  pop.style.filter = 'blur(0px)';
}
closeBtn.addEventListener('click', close);

function closePop(event) {
  if (event.target.className === 'popup_window') {
    popUp.style.display = 'none';
    pop.style.filter = 'blur(0px)';
  }
}
popUp.addEventListener('click', closePop);

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
console.log(projectList);
const worksCard = document.createElement('div');
worksCard.classList.add('works-card');