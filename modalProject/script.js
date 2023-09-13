'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');
let showModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', () => {
    console.log('click button');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  closeModal.addEventListener('click', () => {
    closeModal1();
  });

  overlay.addEventListener('click', () => {
    closeModal1();
  });
}
function closeModal1() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
