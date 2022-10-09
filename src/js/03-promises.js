import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormaSubmit);

function onFormaSubmit(e) {
  e.preventDefault();

  startBtn.disabled = true;
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  let delayEl = Number(delay.value);
  let stepEl = Number(step.value);
  let amountEl = Number(amount.value);

  let totalDelay = delayEl + stepEl * amountEl;

  if (delayEl < 0 || stepEl < 0 || amountEl < 0) {
    Notify.failure('WTF');
    return;
  }

  for (let position = 1; position <= amountEl; position += 1) {
    createPromise(position, delayEl)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );

    delayEl += stepEl;
  }
  formRef.reset();
  onOffBtn(totalDelay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((Fulfill, Reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        Fulfill({ position, delay });
      } else {
        Reject({ position, delay });
      }
    }, delay);
  });
}

function onOffBtn(total) {
  setTimeout(() => {
    startBtn.disabled = false;
  }, total);
}
