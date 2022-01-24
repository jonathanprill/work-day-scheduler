//defining html elements and ID's

var div9am = document.querySelector("#div9am");
var div10am = document.querySelector("#div10am");
var div11am = document.querySelector("#div11am");
var div12pm = document.querySelector("#div12pm");
var div1pm = document.querySelector("#div1pm");
var div2pm = document.querySelector("#div2pm");
var div3pm = document.querySelector("#div3pm");
var div4pm = document.querySelector("#div4pm");
var div5pm = document.querySelector("#div5pm");

///////////////////////////////////////////////////////////////////////////////////////





//Sets clock in header and keeps it ticking
function updateClock() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(updateClock, 100);

///////////////////////////////////////////////////////////////////////////////////////






//Turns tasks different colors based on time
//Got help from here https://stackoverflow.com/questions/36197031/how-to-use-moment-js-to-check-whether-the-current-time-is-between-2-times
time9 = moment('09:00:00', 'hh:mm:ss')
time10 = moment('10:00:00', 'hh:mm:ss')
time11 = moment('11:00:00', 'hh:mm:ss')
time12 = moment('12:00:00', 'hh:mm:ss')
time13 = moment('13:00:00', 'hh:mm:ss')
time14 = moment('14:00:00', 'hh:mm:ss')
time15 = moment('15:00:00', 'hh:mm:ss')
time16 = moment('16:00:00', 'hh:mm:ss')
time17 = moment('17:00:00', 'hh:mm:ss')
time18 = moment('18:00:00', 'hh:mm:ss')

var changeColor = function() {
    if (moment().isBetween(time9, time10)) {
        $(".task-9").addClass("time-danger");
    } else if (moment().isAfter(time9)) {
        $(".task-9").addClass("time-past");
    } if (moment().isBetween(time10, time11)) {
        $(".task-10").addClass("time-danger");
    } else if (moment().isAfter(time10)) {
        $(".task-10").addClass("time-past");
    } if (moment().isBetween(time11, time12)) {
        $(".task-11").addClass("time-danger");
    } else if (moment().isAfter(time11)) {
        $(".task-11").addClass("time-past");
    } if (moment().isBetween(time12, time13)) {
        $(".task-12").addClass("time-danger");
    } else if (moment().isAfter(time12)) {
        $(".task-12").addClass("time-past");
    } if (moment().isBetween(time13, time14)) {
        $(".task-13").addClass("time-danger");
    } else if (moment().isAfter(time13)) {
        $(".task-13").addClass("time-past");
    } if (moment().isBetween(time14, time15)) {
        $(".task-14").addClass("time-danger");
    } else if (moment().isAfter(time14)) {
        $(".task-14").addClass("time-past");
    } if (moment().isBetween(time15, time16)) {
        $(".task-15").addClass("time-danger");
    } else if (moment().isAfter(time15)) {
        $(".task-15").addClass("time-past");
    } if (moment().isBetween(time16, time17)) {
        $(".task-16").addClass("time-danger");
    } else if (moment().isAfter(time16)) {
        $(".task-16").addClass("time-past");
    } if (moment().isBetween(time17, time18)) {
        $(".task-17").addClass("time-danger");
    } else if (moment().isAfter(time17)) {
        $(".task-17").addClass("time-past");
    }
};

changeColor();

///////////////////////////////////////////////////////////////////////////////////////






//Creates inputs for tasks
var task9am = document.createElement("input");
task9am.placeholder = "";
task9am.id = "input9am";
div9am.appendChild(task9am)

var task10am = document.createElement("input");
task10am.placeholder = "";
task10am.id = "input10am";
div10am.appendChild(task10am)

var task11am = document.createElement("input");
task11am.placeholder = "";
task11am.id = "input11am";
div11am.appendChild(task11am)

var task12pm = document.createElement("input");
task12pm.placeholder = "";
task12pm.id = "input12pm";
div12pm.appendChild(task12pm)

var task1pm = document.createElement("input");
task1pm.placeholder = "";
task1pm.id = "input1pm";
div1pm.appendChild(task1pm)

var task2pm = document.createElement("input");
task2pm.placeholder = "";
task2pm.id = "input2pm";
div2pm.appendChild(task2pm)

var task3pm = document.createElement("input");
task3pm.placeholder = "";
task3pm.id = "input3pm";
div3pm.appendChild(task3pm)

var task4pm = document.createElement("input");
task4pm.placeholder = "";
task4pm.id = "input4pm";
div4pm.appendChild(task4pm)

var task5pm = document.createElement("input");
task5pm.placeholder = "";
task5pm.id = "input5pm";
div5pm.appendChild(task5pm)

///////////////////////////////////////////////////////////////////////////////////////











// Saves task inputs to local storage

$(".allButtons").click(function(event) {
    event.preventDefault();
    
    var tasks = [{
      nineAM: input9am.value.trim() || input9am.placeholder.trim(),
      tenAM: input10am.value.trim() || input10am.placeholder.trim(),
      elevenAM: input11am.value.trim() || input11am.placeholder.trim(),
      twelvePM: input12pm.value.trim() || input12pm.placeholder.trim(),
      onePM: input1pm.value.trim() || input1pm.placeholder.trim(),
      twoPM: input2pm.value.trim() || input2pm.placeholder.trim(),
      threePM: input3pm.value.trim() || input3pm.placeholder.trim(),
      fourPM: input4pm.value.trim() || input4pm.placeholder.trim(),
      fivePM: input5pm.value.trim() || input5pm.placeholder.trim()
    }];
    // sets tasks to local storage 
    localStorage.setItem('tasks', JSON.stringify(tasks));
});


//Gets arrary from storage

var getstasks = JSON.parse(localStorage.getItem('tasks'))  || '[]'; 
var fromArr = getstasks[0]; 


//Sets whats in memory to placeholder
task9am.placeholder = fromArr.nineAM || '';
task10am.placeholder = fromArr.tenAM || '';
task11am.placeholder = fromArr.elevenAM || '';
task12pm.placeholder = fromArr.twelvePM || '';
task1pm.placeholder = fromArr.onePM || '';
task2pm.placeholder = fromArr.twoPM || '';
task3pm.placeholder = fromArr.threePM || '';
task4pm.placeholder = fromArr.fourPM || '';
task5pm.placeholder = fromArr.fivePM || '';


///////////////////////////////////////////////////////////////////////////////////////







//CLEARS INPUT FIELD WHEN CLICKED ON

task9am.addEventListener("click", function() {
    $('#input9am').attr('placeholder','');
});


task10am.addEventListener("click", function() {
    $('#input10am').attr('placeholder','');
});


task11am.addEventListener("click", function() {
    $('#input11am').attr('placeholder','');
});


task12pm.addEventListener("click", function() {
    $('#input12pm').attr('placeholder','');
});

task1pm.addEventListener("click", function() {
    $('#input1pm').attr('placeholder','');
});

task2pm.addEventListener("click", function() {
    $('#input2pm').attr('placeholder','');
});

task3pm.addEventListener("click", function() {
    $('#input3pm').attr('placeholder','');
});

task4pm.addEventListener("click", function() {
    $('#input4pm').attr('placeholder','');
});

task5pm.addEventListener("click", function() {
    $('#input5pm').attr('placeholder','');
});












