import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const inputDate = document.querySelector("#datetime-picker");
const buttonRef = document.querySelector("button[data-start]");
const timerDays = document.querySelector("span[data-days]");
const timerHours = document.querySelector("span[data-hours]");
const timerMinutes = document.querySelector("span[data-minutes]");
const timerSeconds = document.querySelector("span[data-seconds]");

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function handleDateChange() {
  const selectedDate = datePicker.selectedDates[0];
  const currentTime = new Date();

  if (selectedDate <= currentTime) {
    window.alert("Будь ласка, оберіть дату в майбутньому");
  } else {
    buttonRef.removeAttribute("disabled");
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {

      Notiflix.Report.warning("Please choose a date in the future")
    } else {
      buttonRef.removeAttribute("disabled");
    }
  },
};

const datePicker = flatpickr(inputDate, options);

buttonRef.disabled = true;


datePicker.config.onChange.push((selectedDates, dateStr) => {
  const selectedDate = selectedDates[0];
  
  if (selectedDate > new Date()) {
    buttonRef.removeAttribute("disabled");
  } else {
    buttonRef.disabled = false;
  }
});

buttonRef.addEventListener("click", startTimer);

function startTimer() {
  const selectedDate = datePicker.selectedDates[0];
  const countdownElement = document.querySelector(".timer");

  const timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeRemaining = selectedDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      countdownElement.style.display = "none";
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    
    updateCountdownUI(days, hours, minutes, seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

function updateCountdownUI(days, hours, minutes, seconds) {
  timerDays.textContent = addLeadingZero(days);
  timerHours.textContent = addLeadingZero(hours);
  timerMinutes.textContent = addLeadingZero(minutes);
  timerSeconds.textContent = addLeadingZero(seconds);

}



















