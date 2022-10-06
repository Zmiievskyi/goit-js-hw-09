import * as myModule from './module';
const { refs, getRandomHexColor } = myModule;

refs.startBtn.addEventListener('click', onChangeBackgroun);

function onChangeBackgroun() {
  console.log('start');
  const DELAY = 1000;
  const id = setInterval(randomBackground, DELAY);
  refs.stopBtn.addEventListener('click', offChangeBackgroun);
  function offChangeBackgroun() {
    console.log('stop');
    clearInterval(id);
    refs.stopBtn.removeEventListener('click', offChangeBackgroun);
    refs.startBtn.addEventListener('click', onChangeBackgroun);
  }
}

function randomBackground() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.startBtn.removeEventListener('click', onChangeBackgroun);
}
