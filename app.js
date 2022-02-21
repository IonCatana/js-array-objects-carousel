const slidesArray = [
  {
    item: 'img/01.jpg',
    title: 'Svezia',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  },
  {
    item: 'img/02.jpg',
    title: 'Svizzera',
    text: 'Lorem ipsum',
  },
  {
    item: 'img/03.jpg',
    title: 'Gran Bretagna',
    text: 'Lorem ipssum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    item: 'img/04.jpg',
    title: 'Germania',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  },
  {
    item: 'img/05.jpg',
    title: 'Paradise',
    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  },
];

// Richiamo nelle variabile gli slide-wrapper
const mainSlide = document.querySelector('.main-slide');
const slideList = document.querySelector('.slide-list');

// Indice slide selezionata attualmente
let currentIndex = 0;

// Ciclo creazione slides
slidesArray.forEach(({ item, title, text }, i) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `<img src="${item}" alt="">`;

  if (currentIndex === i) {
    slide.classList.add('active');
  }

  slideList.append(slide.cloneNode(true));

  slide.innerHTML += `<div class="slide_info">
      <h2 class="slide_title">${title}</h2>
      <p class="slide_desc">${text}</p>
   </div>`; // aggiunta html appartenente solo a mainSlide

  mainSlide.append(slide);
});

// Salvo le slide create precedentemente in due array per manipolarne le classi
const slides = document.querySelectorAll('.main-slide .slide');
const slidesSmall = document.querySelectorAll('.slide-list .slide');

// Richiamo nelle variabili i controlli
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');

// Freccia in alto
arrowUp.addEventListener('click', function () {
  slides[currentIndex].classList.remove('active');
  slidesSmall[currentIndex].classList.remove('active');

  if (currentIndex <= 0) {
    currentIndex = slidesArray.length - 1;
  } else {
    currentIndex--;
  }

  slides[currentIndex].classList.add('active');
  slidesSmall[currentIndex].classList.add('active');
});

// Freccia in basso
arrowDown.addEventListener('click', function () {
  slides[currentIndex].classList.remove('active');
  slidesSmall[currentIndex].classList.remove('active');

  if (currentIndex >= slidesArray.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  slides[currentIndex].classList.add('active');
  slidesSmall[currentIndex].classList.add('active');
});
