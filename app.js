// La variabile title
const title = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'];

// La variabile items
const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg',
];
// La variabile text
const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
console.log(title, items, text);

// Richiamo nelle variabile gli slide-wrapper
const mainSlide = document.querySelector('.main-slide');
const slideList = document.querySelector('.slide-list');
console.log(mainSlide, slideList);

// Indice slide selezionata attualmente
let currentIndex = 0;

// Ciclo creazione slides
for (let i = 0; i < items.length; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `<img src="${items[i]}" alt="">`;

  if (currentIndex === i) {
    slide.classList.add('active');
  }

  slideList.append(slide.cloneNode(true));

  slide.innerHTML += `<div class="slide_info">
      <h2 class="slide_title">${title[i]}</h2>
      <p class="slide_desc">${text[i]}</p>
   </div>`;

  mainSlide.append(slide);
}

// Salvo le slide create precedentemente in due array per manipolarne le classi
const slides = document.querySelectorAll('.main-slide .slide');
const slidesSmall = document.querySelectorAll('.slide-list .slide');

// Richiamo nelle variabili i controlli
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
console.log(arrowUp, arrowDown);

// Arrow Up
arrowUp.addEventListener('click', function () {
  slides[currentIndex].classList.remove('active');
  slidesSmall[currentIndex].classList.remove('active');

  if (currentIndex <= 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex--;
  }

  slides[currentIndex].classList.add('active');
  slidesSmall[currentIndex].classList.add('active');
});

// Arrow Down
arrowDown.addEventListener('click', function () {
  slides[currentIndex].classList.remove('active');
  slidesSmall[currentIndex].classList.remove('active');

  if (currentIndex >= items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  slides[currentIndex].classList.add('active');
  slidesSmall[currentIndex].classList.add('active');
});
