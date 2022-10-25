const dateTimeNow = new Date();
const date = dateTimeNow.toLocaleDateString();
const time = dateTimeNow.toLocaleTimeString();
const alert = alert(`${date} ${time}: This is the best moment to have a look at this website !`);
alert;
console.log(alert); // 17/08/2020
