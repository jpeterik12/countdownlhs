/*jshint maxerr: 1000 */


function startTimer(delay, PLC) {
    var hours;

    if (!delay) delay = 0;
    if (!PLC) PLC = false;

    if (PLC) {
        hours = [45, 33, 20, [7, 54],
            [23, 52], 21, 7, 53
        ];
    } else {
        hours = [45, 40, 34, 28, [22, 51],
            [20, 49], 43, 37
        ];
    }
    var now = new Date(Date.now() + delay * 1000);

    var endHour = now.getHours();

    var currentMinute = now.getMinutes();

    var period = endHour - 7;

    var endMinuteTest = hours[period];
    
    if (period < 0) {
      alert('It\'s before school!');
      return;
    }
    
    if (!endMinuteTest) {
      alert('It\'s after school!');
      return;
    }

    var endMinuteTestArray;

    var isArray = false;

    var arrayNum;

    if (Array.isArray(endMinuteTest)) {
        endMinuteTestArray = endMinuteTest;

        endMinuteTest = endMinuteTestArray[0];

        isArray = true;

        arrayNum = 0;

        if (currentMinute >= endMinuteTest) {
            endMinuteTest = endMinuteTestArray[1];
            arrayNum = 1;
        }
    }

    if (currentMinute >= endMinuteTest) {
        endHour++;

        period = endHour - 7;

        endMinuteTest = hours[period];

        isArray = false;
    }

    if (Array.isArray(endMinuteTest)) {
        endMinuteTestArray = endMinuteTest;

        endMinute = endMinuteTestArray[0];

        isArray = true;
        arrayNum = 0;
    } else {
        endMinute = endMinuteTest;
    }

    countdown(endHour, endMinute, delay, period, isArray, arrayNum, PLC);
}

function countdown(endHour, endMinute, delay, period, isArray, arrayNum, PLC) {
    var longMessages;

    if (PLC) {
        longMessages = [
            'until start of school',
            'left in period 1',
            'left in period 2', ['left in period 3', 'left in period 4'],
            ['left in lunch A', 'left in lunch B'],
            'left in lunch C',
            'left in period 6',
            'left in period 7',
        ];
    } else {
        longMessages = [
            'until start of school',
            'left in period 1',
            'left in period 2',
            'left in period 3', ['left in period 4', 'left in lunch A'],
            ['left in lunch B', 'left in lunch C'],
            'left in period 6',
            'left in period 7',
        ];
    }

    var longMessage = longMessages[period];

    if (isArray) {
        longMessage = longMessage[arrayNum];
    }

    display(endHour, endMinute, delay, longMessage, PLC);
}

function display(endHour, endMinute, delay, longMessage, PLC) {
    var now = new Date(Date.now() + delay * 1000);

    var endDate = new Date();

    endDate.setHours(endHour);

    endDate.setMinutes(endMinute);

    endDate.setSeconds(0);

    var diff = endDate - now;

    var hours = Math.floor(diff / 3.6e6);

    var minutes = Math.floor(diff % 3.6e6 / 6e4);

    var seconds = Math.floor(diff % 6e4 / 1000);

    if (seconds < 0) {
        startTimer(delay, PLC);
        return;
    }
    
    timeLeft = hours + ':' + ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2);
    setText(timeLeft, 'Clock');

    document.title = (timeLeft + ' ' + longMessage);
    window.stopID = setTimeout(display, 1000, endHour, endMinute, delay, longMessage, PLC);
}

function getWednesdays() {
    'use strict';
    var todaygetWed = new Date();
    var month = todaygetWed.getMonth();
    var wednesdays = [];

    todaygetWed.setDate(1);
    todaygetWed.setHours(0, 0, 0, 0);

    while (todaygetWed.getDay() !== 3) {
        todaygetWed.setDate(todaygetWed.getDate() + 1);
    }

    while (todaygetWed.getMonth() === month) {
        wednesdays.push(new Date(todaygetWed.getTime()));
        todaygetWed.setDate(todaygetWed.getDate() + 7);
    }

    return wednesdays;
}

function isPLC() {
    'use strict';
    var todayPLC = new Date();
    if (todayPLC.getDay != 3) return false;

    var wednesdays = getWednesdays();
    var wednesdayOne = wednesdays[0];
    var wednesdayThree = wednesdays[2];
    if (
        todayPLC.getDate() == wednesdayOne.getDate() ||
        todayPLC.getDate() == wednesdayThree.getDate()) {
        return true;
    }
    return false;
}

function setText(text,ID) {
    document.getElementById(ID).innerHTML = text;
}

function numberFormat(numberStr) {
    if (numberStr[-1] === '1') {
        return 'st';
    } else if (numberStr[-1] === '2') {
        return 'nd';
    } else if (numberStr[-1] === '3') {
        return 'rd';
    } else {
        return 'th';
    }
}

function isUnusual() {
    today = new Date();
    todayStr = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
    unusualDays = ['1/26/2018'];
    return unusualDays.indexOf(todayStr) != -1;
}

function run(delay) {
  
    if (window.stopID) clearTimeout(window.stopID);
  
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var dayMessage = 'Today is ' + weekdays[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + today.getDate() + numberFormat(today.getDate()) + ', ';



    if (today.getDay() === 6 || new Date().getDay() === 0) {
        alert('It\'s the weekend. Why are you here?');
        dayMessage = dayMessage + 'and it is the weekend.';
        setText(dayMessage, 'Date');
        return;
    } else if (isUnusual()) {
        alert('Today has a unique schedule. Countdown won\'t work today. Sorry.');
        dayMessage = dayMessage + 'and it is an unusual day.';
        setText(dayMessage, 'Date');
        return;
    } else if (isPLC()) {
        alert('Today is a PLC day. Hurray!');
        dayMessage = dayMessage + 'and it is a PLC day.';
        setText(dayMessage, 'Date');
        startTimer(delay, true);
    } else {
        dayMessage = dayMessage + 'and it is a regular weekday.';
        setText(dayMessage, 'Date');
        startTimer(delay);
    }
}

run(parseInt(document.getElementById('delayInput').value));