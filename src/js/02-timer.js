import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    timerConteiner: document.querySelector('.timer'),    
    dataTimer: document.querySelector('[data-days]'),
    hoursTimer: document.querySelector('[data-hours]'),
    minutesTimer: document.querySelector('[data-minutes]'),
    secondsTimer: document.querySelector('[data-seconds]'),
    selectedDate: null,
    timeId: null,
};

const DURATION = 1000;


// refs.btnStart.setAttribute("disabled", 'disabled');
refs.btnStart.disabled = true;
refs.input.disabled =  false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // isActive: false,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0].getTime() < Date.now()){
        // window.alert("Please choose a date in the future");
        Notify.warning('Please chjkukhoose a date in the future');
      } else {
        refs.btnStart.disabled = false;
        // refs.btnStart.removeAttribute('disabled');
        // this.isActive = true;
        refs.selectedDate = selectedDates[0].getTime();
      }
    },
  };

const timeCalendar = flatpickr(refs.input, options);
// refs.input.addEventListener('click', timeCalendar);

// const selectedTime = refs.input.value;

function ontimerStartClick(){
  refs.input.disabled = true;
  refs.btnStart.disabled = true;
  timerTime();
  refs.timeId = setInterval(timerTime, DURATION);
}

function timerTime(){
  const selectedTime = refs.selectedDate;
  const currentTime = Date.now();
  const deltaTime = selectedTime - currentTime;
  const time = convertMs(deltaTime);
  if (deltaTime < DURATION) {
    clearInterval(elements.timeId);
  }
  startTimer(time);
}

refs.btnStart.addEventListener('click', ontimerStartClick);

// console.log(refs.btnStart);

function startTimer({ days, hours, minutes, seconds}){
  refs.dataTimer.textContent = days;
  refs.hoursTimer.textContent = hours;
  refs.minutesTimer.textContent = minutes;
  refs.secondsTimer.textContent = seconds;
}

function addLeadingZero(value){
  return String(value).padStart(2, '0');
}

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }