//Sets clock in header and keeps it ticking
function updateClock() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(updateClock, 100);



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



  


















// var changeColor9 = function() {
//     if (moment().isBetween(time9, time10)) {
//       $(".task-9").addClass("time-danger");
//     } else if (moment().isAfter(time9)) {
//         $(".task-9").addClass("time-past");
//     }
// };

// var changeColor10 = function() {
//     if (moment().isBetween(time10, time11)) {
//       $(".task-10").addClass("time-danger");
//     } else if (moment().isAfter(time10)) {
//         $(".task-10").addClass("time-past");
//     }
// };

// var changeColor11 = function() {
//     if (moment().isBetween(time11, time12)) {
//       $(".task-11").addClass("time-danger");
//     } else if (moment().isAfter(time11)) {
//         $(".task-11").addClass("time-past");
//     }
// };

// var changeColor12 = function() {
//     if (moment().isBetween(time12, time13)) {
//       $(".task-12").addClass("time-danger");
//     } else if (moment().isAfter(time12)) {
//         $(".task-12").addClass("time-past");
//     }
// };

// var changeColor13 = function() {
//     if (moment().isBetween(time13, time14)) {
//       $(".task-13").addClass("time-danger");
//     } else if (moment().isAfter(time13)) {
//         $(".task-13").addClass("time-past");
//     }
// };

// var changeColor14 = function() {
//     if (moment().isBetween(time14, time15)) {
//       $(".task-14").addClass("time-danger");
//     } else if (moment().isAfter(time14)) {
//         $(".task-14").addClass("time-past");
//     }
// };

// var changeColor15 = function() {
//     if (moment().isBetween(time15, time16)) {
//       $(".task-15").addClass("time-danger");
//     } else if (moment().isAfter(time15)) {
//         $(".task-15").addClass("time-past");
//     }
// };

// var changeColor16 = function() {
//     if (moment().isBetween(time16, time17)) {
//       $(".task-16").addClass("time-danger");
//     } else if (moment().isAfter(time16)) {
//         $(".task-16").addClass("time-past");
//     }
// };

// var changeColor17 = function() {
//     if (moment().isBetween(time17, time18)) {
//       $(".task-17").addClass("time-danger");
//     } else if (moment().isAfter(time17)) {
//         $(".task-17").addClass("time-past");
//     }
// };


// changeColor9();
// changeColor10();
// changeColor11();
// changeColor12();
// changeColor13();
// changeColor14();
// changeColor15();
// changeColor16();
// changeColor17();