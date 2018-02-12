/*jshint maxerr: 1000 */

//regular

function startTimer() {
  getEndDate();
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
      ['left in period 6',
      'left in period 7'],
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

  var days = Math.floor(diff / (1000 * 3600 * 24));

  var hours = Math.floor((diff / 3.6e6) - (days *24));

  var minutes = Math.floor(diff % 3.6e6 / 6e4);

  var seconds = Math.floor(diff % 6e4 / 1000);

  if (seconds < 0) {
    run();
    return;
  }

  timeLeft =
    days + ':' + ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

  if (days === 0) {
    timeLeft = timeLeft.substring(2);
    if (hours === 0) timeLeft = timeLeft.substring(3);
  }
  setText(timeLeft, 'Clock');

  document.title = (timeLeft + ' ' + message);
  // console.log(timeLeft + ' ' + message);
  window.stopID = setTimeout(loop, 1000, endDate, message, PLC);
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
<<<<<<< HEAD:code.js
    alert("Why are you here? It's a snow day!");
    dayMessage = dayMessage + 'and it is a snow day.';
=======
    alert("Today has a unique schedule. Countdown won't work today. Sorry.");
    dayMessage = dayMessage + 'and it is an unusual day.';
>>>>>>> beta:javascript/code.js
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
