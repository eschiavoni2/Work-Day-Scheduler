// load document first before jquery
$( document ).ready(function() {
// getting current time/day appended to page
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"));
// Saving text to text area local storage
$(".saveBtn").on("click", save)



// variable for current time
var currentTime = moment().hour();

function scheduleDis() {
    var nineA = localStorage.getItem("9a");
    $('#9').val(nineA);
    var tenA = localStorage.getItem("10a");
    $('#10').val(tenA);
    var elA = localStorage.getItem("11a");
    $('#11').val(elA);
    var twP = localStorage.getItem("12p");
    $('#12').val(twP);
};

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
    scheduleDis();
});

