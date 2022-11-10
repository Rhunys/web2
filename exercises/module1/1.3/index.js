const dateTimeNow = new Date();
const date = dateTimeNow.toLocaleDateString();
const time = dateTimeNow.toLocaleTimeString();

function timeAlert() {
    alert(`${date} ${time} : This is the best moment to have a look at this website !`);
}

console.log(timeAlert()); 
