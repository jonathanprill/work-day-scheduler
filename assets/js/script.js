//Sets clock in header and keeps it ticking
function updateClock() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(updateClock, 100);

