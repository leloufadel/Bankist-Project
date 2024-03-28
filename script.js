'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const section1 = document.getElementById('section--1')
const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
console.log(message)
message.innerHTML = `we use cookies to improve functionalities and analysis. 
<button class= "btn btn--close-cookie">Got it</button>`

header.append(message);
// header.after(message);
// header.before(message);
// header.prepend(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  // before it was : 
  // message.parentElement.removechild(message)
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).height);

// add 10 px to message.height;
console.log(message.style.height = Number.parseFloat((getComputedStyle(message).height, 10) + 10 + 'px'));

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.getAttribute('designer'));
console.log(logo.dataset.versionNumber);

// section1.scrollIntoView({ behavior: 'smooth'});

// rgb(255, 255, 255)

// const alertH1 = function(){
//   alert("You clicked H1 elemet");
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => 
//   h1.removeEventListener('mouseenter', alertH1
// ), 3000);

// const randomInt = (min , max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => 
// `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });
// Page navigation
document.querySelectorAll('.nav__link')
.forEach(function(el){
  el.addEventListener('click', function(e){
  e.preventDefault();
  const id = this.getAttribute('href');
  // console.log(id)
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  });
})
  
})


