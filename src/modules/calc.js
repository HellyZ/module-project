const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  let interval;
  const animateTotalCount = (num, elem) => {

    const time = 200;
    const step = 5;
    let e = document.querySelector(elem);
    let n = 0;
    let t = Math.round(time / (num / step));
    interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      e.innerHTML = n;
    }, t);
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    return totalValue;
  };

  calcBlock.addEventListener("input", (e) => {
    let res = countCalc();
    if (res > 0) {
      clearInterval(interval);
      animateTotalCount(res, "#total");
    }
  });
};

export default calc;