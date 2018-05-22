/*jshint maxerr: 1000 */
function start(endDate) {
  if (window.stopID) {
    clearTimeout(window.stopID);
  }

  today = dater();
  window.PLC = isPLC(today);

  window.delay = 0;
  if (window.location.hostname == 'www.countdownlhs.ga') {
    if (localStorage.getItem('delay')) {
      window.delay = parseInt(localStorage.getItem('delay'));
    }
  }

  dayMessage = 'Today is ' + formatDate(dater()) + ', ';


  if (endDate) {
    alert('Custom countdown set!');
    dayMessage = dayMessage + 'and you are running a custom countdown.';
    setText(dayMessage, 'date');
    window.stopID = setTimeout(loop, 1000, endDate, ' until date');
    return;
  }


  normalSchedule = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
    ],
    [[0, 'until block A']
    ],
    [[30, 'left in block A'],
     [45, 'until block B']
    ],
    [
    ],
    [[15, 'left in block B'],
     [30, 'until block C']
    ],
    [
    ],
    [[0,'left in block C']
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

  plcSchedule = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
    ],
    [[0, 'until block A']
    ],
    [[30, 'left in block A'],
     [45, 'until block B']
    ],
    [
    ],
    [[15, 'left in block B'],
     [30, 'until block C']
    ],
    [
    ],
    [[0,'left in block C']
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

  schedule = normalSchedule;

  if (window.PLC) schedule = plcSchedule;

  if (today.getDay() === 6 || today.getDay() === 0) {
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
    return;
  } else {
    dayMessage = dayMessage + 'and it is a regular weekday.';
    setText(dayMessage, 'date');
    startTimer(schedule);
  }
}

function startTimer(schedule) {
  now = dater();
  scheduleArray = getNextTime(schedule, now.getHours(), now.getMinutes());
  endTime = createDate(scheduleArray[0], scheduleArray[1], scheduleArray[3]);
  window.stopID = setTimeout(loop, 1000, endTime, scheduleArray[2]);
}

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
    start();
    console.log('Done');
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
  window.stopID = setTimeout(loop, 1000, endDate, message);
}

start();
