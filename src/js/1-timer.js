// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

//=======================================

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

//=======================================

let userSelectedDate;

const btn = document.querySelector('button');
btn.disabled = true;
const day = document.querySelector('.value[data-days]');
const hour = document.querySelector('.value[data-hours]');
const min = document.querySelector('.value[data-minutes]');
const sec = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0]) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      btn.disabled = true;
      return;
    }
    btn.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

btn.addEventListener('click', () => {
  let timerValue = convertMs(userSelectedDate - Date.now());
  btn.disabled = true;
  day.textContent = addLeadingZero(timerValue.days);
  hour.textContent = addLeadingZero(timerValue.hours);
  min.textContent = addLeadingZero(timerValue.minutes);
  sec.textContent = addLeadingZero(timerValue.seconds);
  const intervalId = setInterval(() => {
    timerValue = convertMs(userSelectedDate - Date.now());

    day.textContent = addLeadingZero(timerValue.days);
    hour.textContent = addLeadingZero(timerValue.hours);
    min.textContent = addLeadingZero(timerValue.minutes);
    sec.textContent = addLeadingZero(timerValue.seconds);
    if (timerValue.seconds === 0) {
      console.log('Звуки айфонівського будильника');
      clearInterval(intervalId);
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const stringNum = String(value);
  return stringNum.padStart(2, '0');
}
