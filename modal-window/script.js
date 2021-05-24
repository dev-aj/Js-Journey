'use strict';

let btnCloseModal = document.querySelector('.close-modal');
let showModal = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && !modal.classList.contains('hidden')) {
    //27 for Escape
    closeModal();
  }
});
