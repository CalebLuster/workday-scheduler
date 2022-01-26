

let currentDate = moment().format("dddd, MMM do YYYY");
$("#currentDay").html(currentDate);

$(document).ready(function () {
    $(".btn").on("click", function () {
        let userPrompt = $(this).siblings(".description").val();
        let nineToFive = $(this).parent().attr("id");
        localStorage.setItem(userPrompt, nineToFive);
    })

    function currentTime () {
        let clock = moment().hour();
        // console.log(clock)

        $(".time-block").each(function () {
            let clockTimes = parseInt($(this).attr("id"));
            console.log(clockTimes)
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
        $("#9 .description").val(localStorage.getItem("current-time9"));
        $("#10 .description").val(localStorage.getItem("current-time10"));
        $("#11 .description").val(localStorage.getItem("current-time11"));
        $("#12 .description").val(localStorage.getItem("current-time12"));
        $("#13 .description").val(localStorage.getItem("current-time1"));
        $("#14 .description").val(localStorage.getItem("current-time2"));
        $("#15 .description").val(localStorage.getItem("current-time3"));
        $("#16 .description").val(localStorage.getItem("current-time4"));
        $("#17 .description").val(localStorage.getItem("current-time5"));
    currentTime();
})

// 1. Display date and time that updates regularly.✅
// 2. Save items in local storage. ✅
// 3. Have the times be color codied for the specific time that it is✅