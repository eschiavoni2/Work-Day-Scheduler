// load document first before jquery
$( document ).ready(function() {
// getting current time/day appended to page
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"));

// variable for current time
var currentTime = moment().hour();


    function timeCheck() {
        $(".row").each(function () {
            var hour = parseInt($(this).attr("id"))
            console.log(hour)
            // check if we’ve moved past this time
            if (hour < currentTime) {
                $(this).addClass("past");
            }
            else if (hour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    timeCheck();
});

