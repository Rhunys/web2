const redLight = document.querySelector('#redLight');
const orangeLight = document.querySelector('#orangeLight');
const greenLight = document.querySelector('#greenLight');

const clockHolder = document.querySelector("span");

btn1.addEventListener("click", stopOrResumeClock);

var myInterval;

startClock();

function startClock(){
    myInterval = setInterval(printCurrentTime, 2000);
}

function printCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    clockHolder.innerText = time;
}
  
function stopOrResumeClock() {
    if (myIntervalId) {
      clearInterval(myIntervalId);
      myIntervalId = undefined;
    } else startClock();
}