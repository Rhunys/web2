const redLight = document.querySelector('#red');
const orangeLight = document.querySelector('#orange');
const greenLight = document.querySelector('#green');

const btn = document.querySelector("button");
const clockHolder = document.querySelector("span");

btn1.addEventListener("click", stopOrResumeClock);

var myInterval;

redLight();

function redLight(){
    orangeLight.style.backgroundColor = "white";
    redLight.style.backgroundColor = "red";
    myInterval = setTimeout(orangeLight,2000);
}

function orangeLight1(){
    redLight.style.backgroundColor = "white";
    orangeLight.style.backgroundColor = "orange";
    myInterval = setTimeout(greenLight,2000);
}

function greenLight(){
    orangeLight.style.backgroundColor = "white";
    greenLight.style.backgroundColor = "green";
    myInterval = setTimeout(orangeLight2,2000);
}

function orangeLight2(){
    greenLight.style.backgroundColor = "white";
    orangeLight.style.backgroundColor = "orange";
    myInterval = setTimeout(redLight,2000);
}

function stopOrResumeClock() {
    if (myIntervalId) {
      clearInterval(myIntervalId);
      myIntervalId = undefined;
    } else startClock();
}