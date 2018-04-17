/*jshint maxerr: 1000 */

function createDate(hour, minute, nextDay) {
  createdDate = dater();
  createdDate.setSeconds(0);
  createdDate.setHours(hour);
  createdDate.setMinutes(minute);
  if (nextDay) createdDate.setDate(createdDate.getDate() + 1);
  return createdDate;
}

function loop(endDate, message) {
  now = dater();
  var diff = endDate - now;

  var days = Math.floor(diff / (1000 * 3600 * 24));
  var hours = Math.floor(diff / 3.6e6 - days * 24);
  var minutes = Math.floor(diff % 3.6e6 / 6e4);
  var seconds = Math.floor(diff % 6e4 / 1000);
  if (seconds < 0) {
    run(window.usedSchedule);
    return;
  }
  timeLeft =
    days +
    ':' +
    ('0' + hours).slice(-2) +
    ':' +
    ('0' + minutes).slice(-2) +
    ':' +
    ('0' + seconds).slice(-2);
  if (days === 0) {
    timeLeft = timeLeft.substring(2);
    if (hours === 0) timeLeft = timeLeft.substring(3);
  }

  setText(timeLeft + ' ' + message, 'title');
  setText(timeLeft, 'clock');
  window.stopID = setTimeout(loop, 1000, endTime, scheduleArray[2]);
}

function startTimer(schedule) {
  now = dater();
  scheduleArray = getNextTime(schedule, now.getHours(), now.getMinutes());
  endTime = createDate(scheduleArray[0], scheduleArray[1], scheduleArray[3]);
  window.stopID = setTimeout(loop, 1000, endTime, scheduleArray[2]);
}

function setText(text, ID) {
  if (document.getElementById(ID)) {
    document.getElementById(ID).innerHTML = text;
  } else if (ID == 'title' && (window.location.href == 'https://www.countdownlhs.ga/' || window.location.href == 'localhost')) {
    document.title = text;
  } else {
    console.log(ID + ':', text);
  }
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

function run(schedule, endDate) {
  window.usedSchedule = schedule;
  if (window.stopID) clearTimeout(window.stopID);

  window.delay = 0;
  if (window.location.href == 'https://www.countdownlhs.ga') {
    if (localStorage.getItem('delay')) {
      window.delay = parseInt(localStorage.getItem('delay'));
    }
  }

  today = dater();
  dayMessage = 'Today is ' + formatDate(today) + ', ';
  window.PLC = isPLC(today);
  if (endDate) {
    alert('Custom countdown set!');
    dayMessage = dayMessage + 'and you are running a custom countdown.';
    setText(dayMessage, 'date');
    window.stopID = setTimeout(loop, 1000, endTime, scheduleArray[2]);
  } else if (today.getDay() === 6 || today.getDay() === 0) {
    alert("It's the weekend. Why are you here?");
    dayMessage = dayMessage + 'and it is the weekend.';
    setText(dayMessage, 'date');
    return;
  } else if (isUnusual(today)) {
    alert("Today is an unusual day. Countdown won't work today. Sorry!");
    dayMessage = dayMessage + 'and it is a unusual day.';
    setText(dayMessage, 'date');
    return;
  } else if (window.PLC) {
    alert('Today is a PLC day. Hurray!');
    dayMessage = dayMessage + 'and it is a PLC day.';
    setText(dayMessage, 'date');
    schedule = window.plcSchedule;
    startTimer(schedule);
  } else {
    dayMessage = dayMessage + 'and it is a regular weekday.';
    setText(dayMessage, 'date');
    startTimer(schedule);
  }
}

function start() {
  schedule = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell'],
      [50, 'until period 1']
    ],
    [
      [40, 'left in period 1'],
      [44, 'until period 2']
    ],
    [
      [34, 'left in period 2'],
      [38, 'until period 3']
    ],
    [
      [28, 'left in period 3'],
      [32, 'until period 4']
    ],
    [
      [22, 'left in period 4'],
      [26, 'until lunch A'],
      [51, 'left in lunch A'],
      [55, 'until lunch B'],
    ],
    [
      [20, 'left in lunch B'],
      [24, 'until lunch C'],
      [49, 'left in lunch C'],
      [53, 'until period 6'],
    ],
    [
      [43, 'left in period 6'],
      [47, 'until period 7']
    ],
    [
      [37, 'left in period 7']
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  plcSchedule = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell'],
      [50, 'until period 1']
    ],
    [
      [33, 'left in period 1'],
      [37, 'until period 2']
    ],
    [
      [20, 'left in period 2'],
      [24, 'until period 3']
    ],
    [
      [7, 'left in period 3'],
      [11, 'until period 4'],
      [54, 'left in period 4'],
      [58, 'until lunch A'],
    ],
    [
      [23, 'left in lunch A'],
      [27, 'until lunch B'],
      [52, 'left in lunch B'],
      [56, 'until lunch C'],
    ],
    [
      [21, 'left in lunch C'],
      [25, 'until period 6']
    ],
    [
      [7, 'left in period 6'],
      [11, 'until period 7'],
      [53, 'left in period 7'],
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  exampleSchedule = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  scheduleSend = schedule;

  if (isPLC(dater())) scheduleSend = plcSchedule;

  run(scheduleSend);
}

start();
