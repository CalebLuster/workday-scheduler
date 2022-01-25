$("#current-time9").value(localStorage.getItem("current-time9"));
$("#current-time10").value(localStorage.getItem("current-time10"));
$("#current-time11").value(localStorage.getItem("current-time11"));
$("#current-time12").value(localStorage.getItem("current-time12"));
$("#current-time1").value(localStorage.getItem("current-time1"));
$("#current-time2").value(localStorage.getItem("current-time2"));
$("#current-time3").value(localStorage.getItem("current-time3"));
$("#current-time4").value(localStorage.getItem("current-time4"));
$("#current-time5").value(localStorage.getItem("current-time5"));

let currentDate = moment().format("dddd, mmm, YYYY");
$("#currentDay").html(todayDate);

function currentTime () {
    let clock = moment().hour();

    $(".time-block").each(function () {
        let clockTimes = parseInt($(this).attribute("id").split("hour")[1]);

        if (clockTimes === clock) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        if (clockTimes < clock) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        if (clockTimes > clock) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}

$(document).ready(function () {
    $(".btn").on("click", function () {
        let userPrompt = $(this).siblings(".description").value();
        let nineToFive = $(this).parent().attribute("id");
        localStorage.setItem(userPrompt, nineToFive);
    })
})
// 1. Display date and time that updates regularly.
// 2. Save items in local storage. ✅
// 3. Have the times be color codied for the specific time that it is✅