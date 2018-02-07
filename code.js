/*jshint maxerr: 1000 */

function startTimer() {
  getEndDate();
}

function getEndDate() {
  var hours;
  var now = new Date(Date.now() + delay);

  if (window.PLC) {
    hours = [45, 33, 20, [7, 54], [23, 52], 21, 7, 53];
  } else {
    hours = [45, 40, 34, 28, [22, 51], [20, 49], 43, 37];
  }

  var endHour = now.getHours();

  var currentMinute = now.getMinutes();

  var period = endHour - 7;

  if (period < 0) {
    alert("It's before school!");
    return;
  }

  var endMinuteTest = hours[period];

  if (!endMinuteTest) {
    alert("It's after school!");
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

    if (!endMinuteTest) {
      alert("It's after school!");
      return;
    }

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

  var endDate = new Date(Date.now() + window.delay);
  endDate.setHours(endHour);

  endDate.setMinutes(endMinute);

  endDate.setSeconds(0);
  message = getMessage(period, isArray, arrayNum);

  loop(endDate, message);
}

function getMessage(period, isArray, arrayNum) {
  var messages;

  if (window.PLC) {
    messages = [
      'until start of school',
      'left in period 1',
      'left in period 2',
      ['left in period 3', 'left in period 4'],
      ['left in lunch A', 'left in lunch B'],
      'left in lunch C',
      'left in period 6',
      'left in period 7',
    ];
  } else {
    messages = [
      'until start of school',
      'left in period 1',
      'left in period 2',
      'left in period 3',
      ['left in period 4', 'left in lunch A'],
      ['left in lunch B', 'left in lunch C'],
      'left in period 6',
      'left in period 7',
    ];
  }

  var message = messages[period];

  if (isArray) {
    message = message[arrayNum];
  }

  return message;
}

function loop(endDate, message) {
  now = new Date(Date.now() + window.delay);

  var diff = endDate - now;

  var hours = Math.floor(diff / 3.6e6);

  var minutes = Math.floor(diff % 3.6e6 / 6e4);

  var seconds = Math.floor(diff % 6e4 / 1000);

  if (seconds < 0) {
    run();
    return;
  }

  timeLeft =
    hours + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

  if (hours === 0) timeLeft = timeLeft.substring(2);

  setText(timeLeft, 'Clock');

  document.title = (timeLeft + ' ' + message);
  // console.log(timeLeft + ' ' + message);
  window.stopID = setTimeout(loop, 1000, endDate, message, PLC);
}

function getWednesdays() {
  'use strict';
  var todaygetWed = new Date(Date.now() + window.delay);
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

function isPLC(date) {
  'use strict';
  if (date.getDay() != 3) return false;

  var wednesdays = getWednesdays();
  var wednesdayOne = wednesdays[0];
  var wednesdayThree = wednesdays[2];
  return (
    date.getDate() == wednesdayOne.getDate() ||
    date.getDate() == wednesdayThree.getDate()
  );
}

function setText(text, ID) {
  document.getElementById(ID).innerHTML = text;
  // console.log(text);
}

function numberFormat(numberStr) {
  if (numberStr.substr(-2) === '11') {
    return 'th';
  } else if (numberStr.substr(-2) === '12') {
    return 'th';
  } else if (numberStr.substr(-2) === '13') {
    return 'th';
  } else if (numberStr.substr(-1) === '1') {
    return 'st';
  } else if (numberStr.substr(-1) === '2') {
    return 'nd';
  } else if (numberStr.substr(-1) === '3') {
    return 'rd';
  } else {
    return 'th';
  }
}

function isUnusual(date) {
  dateStr =
    date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

  unusualDays = ['1/26/2018'];
  return unusualDays.indexOf(dateStr) != -1;
}

function formatDate(date) {
  var weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    weekdays[date.getDay()] +
    ', ' +
    months[date.getMonth()] +
    ' ' +
    date.getDate() +
    numberFormat('' + date.getDate())
  );
}

function run(endDate) {
  if (window.stopID) clearTimeout(window.stopID);

  delay = parseInt(localStorage.getItem('delay'));
  // window.delay = 0;
  window.delay = window.delay * 1000;

  today = new Date(Date.now() + delay);
  dayMessage = 'Today is ' + formatDate(today) + ', ';

  window.PLC = isPLC(today);

  if (endDate) {
    alert('Custom countdown set!');
    dayMessage = dayMessage + 'and you are running a custom countdown.';
    setText(dayMessage, 'Date');
    loop(endDate, 'left');
  } else if (today.getDay() === 6 || today.getDay() === 0) {
    alert("It's the weekend. Why are you here?");
    dayMessage = dayMessage + 'and it is the weekend.';
    setText(dayMessage, 'Date');
    return;
  } else if (isUnusual(today)) {
    alert("Today has a unique schedule. Countdown won't work today. Sorry.");
    dayMessage = dayMessage + 'and it is an unusual day.';
    setText(dayMessage, 'Date');
    return;
  } else if (window.PLC) {
    alert('Today is a PLC day. Hurray!');
    dayMessage = dayMessage + 'and it is a PLC day.';
    setText(dayMessage, 'Date');
    startTimer(delay);
  } else {
    dayMessage = dayMessage + 'and it is a regular weekday.';
    setText(dayMessage, 'Date');
    startTimer(delay);
  }
}

run();
