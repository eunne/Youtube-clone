const clampBtn = document.querySelector('.info .metadata .clampBtn');
const title = document.querySelector('.info .metadata .title');

clampBtn.addEventListener('click', () => {
  clampBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})