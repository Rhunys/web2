const dateTimeNow = new Date();
const date = dateTimeNow.toLocaleDateString();
const time = dateTimeNow.toLocaleTimeString();
alert(`${date} ${time}: This is the best moment to have a look at this website !`);

console.log(date); // 17/08/2020
console.log(time); // 13:26:15
