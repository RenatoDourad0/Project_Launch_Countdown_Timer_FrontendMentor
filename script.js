// const counterSection = document.querySelector('#counter');
// const dayDiv = document.querySelector('#day-div');
// const hourDiv = document.querySelector('#hour-div');
// const minuteDiv = document.querySelector('#minute-div');
// const secondsDiv = document.querySelector('#seconds-div');
// const descriptionSection = document.querySelector('#description');
const backfaces = document.querySelectorAll('.backface');

const MaxHour = '23';
const maxMinute = '59';
const maxSecond = '60';
const maxDay = '13';
const min = '00';

const setCounter = () => {
  const secondsSpan = document.querySelector('#seconds-number');
  const minuteSpan = document.querySelector('#minute-number');
  const hourSpan = document.querySelector('#hour-number');
  const daySpan = document.querySelector('#day-number');

  secondsSpan.innerText = maxSecond;
  minuteSpan.innerText = maxMinute;
  hourSpan.innerText = MaxHour;
  daySpan.innerText = maxDay;
}

const singleDigitConditionEvaluation = (spanTag) => {
  if (parseInt(spanTag.innerText) <= 10 && parseInt(spanTag.innerText) > 0) {
    return true
  }
  return false
};

const singleDigitOperation = (spanTag) => {
  spanTag.innerText = '0' + (parseInt(spanTag.innerText, 10) - 1).toString();
}

const dobleDigitOperations = (spanTag) => {
  spanTag.innerText = (parseInt(spanTag.innerText, 10) - 1).toString();
}

const counterDecrease = (smallSpan, max, bigerSpan) => {
  smallSpan.innerText = max;
  if (singleDigitConditionEvaluation(bigerSpan)) {
    singleDigitOperation(bigerSpan);
  } else {
    dobleDigitOperations(bigerSpan);
  }
}

const decreaseCounter = () => {
  const secondsSpan = document.querySelector('#seconds-number');
  const minuteSpan = document.querySelector('#minute-number');
  const hourSpan = document.querySelector('#hour-number');
  const daySpan = document.querySelector('#day-number');

  if (daySpan.innerText === min && hourSpan.innerText === min && minuteSpan.innerText === min && secondsSpan.innerText === min) {
    return clearInterval();
  } else {
    backfaces.forEach(face => {
      face.style.visibility = 'hidden';
    });
    if (secondsSpan.innerText === min) {
      backfaces[2].style.visibility = 'visible';
      counterDecrease(secondsSpan, maxSecond, minuteSpan);
      if (minuteSpan.innerText === min && hourSpan.innerText !== min) {
        backfaces[1].style.visibility = 'visible';
        counterDecrease(minuteSpan, maxMinute, hourSpan);
        if (hourSpan.innerText === min && daySpan.innerText !== min) {
          backfaces[0].style.visibility = 'visible';
          counterDecrease(hourSpan, MaxHour, daySpan);
        }
      }
    }
    if (singleDigitConditionEvaluation(secondsSpan)) {
      singleDigitOperation(secondsSpan);
    } else {
      dobleDigitOperations(secondsSpan);
    }
    backfaces[3].style.visibility = 'visible';
  }
}

window.onload = () => {
  setCounter();
  setInterval(decreaseCounter, 1000);
};
