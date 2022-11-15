const redLight = document.querySelector('#red');
const orangeLight = document.querySelector('#orange');
const greenLight = document.querySelector('#green');

const btn = document.querySelector("#stopButton");

btn.addEventListener("click", stopOrResumeClock);

let myInterval;

redLightOn();

function redLightOn(){
    orangeLight.style.backgroundColor = "white";
    redLight.style.backgroundColor = "red";
    myInterval = setTimeout(orangeLightOn1,2000);
}

function orangeLightOn1(){
    redLight.style.backgroundColor = "white";
    orangeLight.style.backgroundColor = "orange";
    myInterval = setTimeout(greenLightOn,2000);
}

function greenLightOn(){
    orangeLight.style.backgroundColor = "white";
    greenLight.style.backgroundColor = "green";
    myInterval = setTimeout(orangeLightOn2,2000);
}

function orangeLightOn2(){
    greenLight.style.backgroundColor = "white";
    orangeLight.style.backgroundColor = "orange";
    myInterval = setTimeout(redLightOn,2000);
}

function stopOrResumeClock() {
    let tempInterval = myInterval;
    if (myInterval != undefined) {
      clearInterval(myInterval);
      myInterval = undefined;
    } else {
        if(greenLight.style.backgroundColor == "green"){
            greenLightOn();
        }
        if(redLight.style.backgroundColor == "red"){
            redLightOn();
        }
    }
}