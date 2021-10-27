const timer = (deadline) => {
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

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

  const twoSignsNumber = number => number < 10 ? `0${number}` : number;

  const updateClock = () => {
    let getTime = getTimeRemaining();
    let interval;
    timerDays.textContent = twoSignsNumber(getTime.days);
    timerHours.textContent = twoSignsNumber(getTime.hours);
    timerMinutes.textContent = twoSignsNumber(getTime.minutes);
    timerSeconds.textContent = twoSignsNumber(getTime.seconds);

    if (getTime.timeRemaining > 0) {
      interval = setInterval(updateClock, 1000);
    } else {
      clearInterval(interval);
      console.log("stop");
      timerDays.textContent =
        timerHours.textContent =
        timerMinutes.textContent =
        timerSeconds.textContent =
          "00";
    }
  };
  updateClock();
};

export default timer;
