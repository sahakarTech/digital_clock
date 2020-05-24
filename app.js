var date = new Date();
var day = date.getDay();
console.log(day);
var hours = date.getHours();
console.log(hours);
var minutes = date.getMinutes();
console.log(minutes)

var daysInAWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var today = daysInAWeek[day];

var meridian = "am";

var wish = (hours<12) ? "Morning" : (hours>=12 && hours<16) ? "Afternoon" : "Evening" ;

console.log(wish);

if(hours>12){
    hours = hours%12;
    meridian = "pm"
}

document.getElementsByClassName("time").innerText = `${hours}:${minutes} ${meridian}`;
document.getElementsByClassName("day").innerText = `Today is ${today}`;
document.getElementsByClassName("wishes").innerText = `Good ${wish}`;
