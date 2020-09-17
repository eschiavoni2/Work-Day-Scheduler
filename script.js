$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"));
console.log(moment().format("dddd, MMMM Do h:mm:ss a"));
$("#one").append(moment().hour());
console.log(moment().hour());

var hour = $(".hour").text();
var hourArray = [];

i = 0;

function hourV() {
    console.log(hourArray);
    hourArray.push(hour);
}
hourV();