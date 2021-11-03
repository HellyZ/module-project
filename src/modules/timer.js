const timer = (deadline) => {
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let interval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = (getTime) => {
    timerDays.textContent =
      getTime.days.toString().length > 1 ? getTime.days : "0" + getTime.days;
    timerHours.textContent =
      getTime.hours.toString().length > 1 ? getTime.hours : "0" + getTime.hours;
    timerMinutes.textContent =
      getTime.minutes.toString().length > 1
        ? getTime.minutes
        : "0" + getTime.minutes;
    timerSeconds.textContent =
      getTime.seconds.toString().length > 1
        ? getTime.seconds
        : "0" + getTime.seconds;
  };
  let loadTime = getTimeRemaining();

  if (loadTime.timeRemaining > 0) {
    interval = setInterval(() => {
      updateClock(loadTime);
      loadTime = getTimeRemaining()
    }, 1000)
  } else {
    clearInterval(interval);
    timerDays.textContent =
      timerHours.textContent =
      timerMinutes.textContent =
      timerSeconds.textContent =
        "00";
  }
};

export default timer;
