'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('.section');
const slides = document.querySelectorAll('.slide');


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


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');

// message.classList.add('cookie-message');
// console.log(message)
// message.innerHTML = `we use cookies to improve functionalities and analysis. 
// <button class= "btn btn--close-cookie">Got it</button>`

// header.append(message);


// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove();
 
// });

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

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
      // console.log(id)
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
  }
});


tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
// if there is no clicked then return nothing
if(!clicked) return ;

tabs.forEach(tab => tab.classList.remove('.operations__tab--active'))
tabsContent.forEach(t => t.classList.remove
  ('operations__content--active'))

clicked.classList.add('operations__tab--active');
// Activate content area;
 document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});
//
// refactor : 
const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Add sticky class : 

// const intialcoords = section1.getBoundingClientRect();
// // console.log(intialcoords);
// window.addEventListener('scroll', function (){
//   // console.log(scrollY);
//   if(this.window.scrollY > intialcoords.top) nav.classList.add('sticky');
//  else
//     nav.classList.remove('sticky');
  

// })

// sticky navigation: Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
 const [entry] = entries; // entries[0]

 if(!entry.isIntersecting) nav.classList.add('sticky');
 else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver (
stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px` 
});

headerObserver.observe(header);


// Revealing Elements: 
const revelSection = function (entries, observer){
const [entry] = entries;
// console.log(entry);
if(!entry.isIntersecting) return;
 entry.target.classList.remove('section--hidden');
 observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revelSection, 

  {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function(section)
  {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  })

// lazy loading Images:
const imgTargets = document.querySelectorAll('img[data-src]');

const loadingImg = function (entries, observer){
const [entry] = entries;
if(!entry.isIntersecting) return ;
// replace src with data src
entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function(){
  entry.target.classList.remove('lazy-img');

});
observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadingImg, 
  {
root: null, 
threshold:0,
rootMargin:'200px',
  })

imgTargets.forEach(img => imgObserver.observe(img));


// // slider : 
// const slider = document.querySelector('.slider');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const maxslide = slides.length;
// let curSlide = 0;


// // Refactor 
// const goToSlide = function(slide){
//   slides.forEach((s, i) => (s.style.transform =
//     `translateX(${100 * (i-slide)}%)`)
//  )
// }
// goToSlide(0);
// // Next Slide ;
// const nextSlide = function(){
//   if( curSlide === maxslide -1){
//     curSlide = 0;
//   }
//   else{
//     curSlide++;
//   }
//  goToSlide(curSlide);
 
// }
// const prevSlide = function(){
//   if(curSlide === 0){
//     curSlide = maxslide - 1;
//   }
//   else{
//     curSlide--;
//   }
  
//   goToSlide(curSlide);
// }
// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', prevSlide);











// slider : 
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots')
let curSlide = 0;
const Maxslide = slides.length;



// dots
  
const createDots = function(){
  slides.forEach(function(_, i){
    dotContainer.insertAdjacentHTML('beforeend',
    `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
  
};
createDots();

// Activate Dots : 
const activateDots = function(slide){
  // select all dots and then unactivate all of them exclusing the current dot.

  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');

}
// add tarnslateX to the slides; 
const goToSlide = function (slide){
  slides.forEach((s, i) =>
  s.style.transform = `translateX(${100 * (i - slide)}%)`);
}
goToSlide(0);
const nextSlide = function(){
  if( curSlide ===  Maxslide - 1 ){
    curSlide = 0;
  } 
  else {
  curSlide++ 
}
goToSlide(curSlide);
activateDots(curSlide)

};
const prevSlide = function(){

if (curSlide === 0){
  curSlide = Maxslide - 1;
}
else {
 curSlide --;
}
goToSlide(curSlide);
activateDots(curSlide)
}

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);


// function for keywords:
const dotsDot = function(e){
  if(e.key === 'ArrowLeft') prevSlide();
  (e.key === 'ArrowRight') && nextSlide();
  
  if(e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide)
    }
}
document.addEventListener('keydown', dotsDot 
 )
 
dotContainer.addEventListener('click', dotsDot)
