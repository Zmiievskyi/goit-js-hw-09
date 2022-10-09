import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
  //   minDate: ,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

const refs = {
  startBtn: document.querySelector('.btn'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  min: document.querySelector('span[data-minutes]'),
  sec: document.querySelector('span[data-seconds]'),
};

flatpickr('#datetime-picker', options);

refs.startBtn.disabled = true;
console.dir(Date.now);
function onClose(selectedDates) {
  const actualData = Date.now();
  console.dir(selectedDates);
  if (selectedDates[0].getTime() >= actualData) {
    refs.startBtn.disabled = false;
    refs.startBtn.addEventListener('click', () => {
      refs.startBtn.disabled = true;
      const id = setInterval(() => {
        const timer = getTimeComponents(
          selectedDates[0].getTime() - Date.now()
        );
        const { days, hours, mins, secs } = timer;


        //__________________________________________
        if (secs <= selectedDates[0].getSeconds()) {
          clearInterval(id);
        }
        //------------------------------------------

        
        console.log(secs, selectedDates[0].getSeconds());
        const dayLeft = addLeadingZero(days);
        const hoursLeft = addLeadingZero(hours);
        const minutesLeft = addLeadingZero(mins);
        const secondsLeft = addLeadingZero(secs);
        refs.days.textContent = dayLeft;
        refs.hours.textContent = hoursLeft;
        refs.min.textContent = minutesLeft;
        refs.sec.textContent = secondsLeft;
      }, 1000);
    });
  } else {
    Notify.failure('Please choose a data in tha future');
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function getTimeComponents(time) {
  const days = Math.floor(
    (time % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
}
