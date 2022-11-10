const dateTimeNow = new Date();
const date = dateTimeNow.toLocaleDateString();
const time = dateTimeNow.toLocaleTimeString();
const message = "This is the best moment to have a look at this website !";

function timeAlert() {
    alert(`${date} ${time} : ${message}`);
}

console.log(timeAlert()); 
