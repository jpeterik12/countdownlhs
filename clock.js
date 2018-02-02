function createClock() {
  var deleter = document.getElementById("clock");
  if (deleter) deleter.parentNode.removeChild(deleter);
  clock = document.createElement('p');
  clock.innerHTML = '00:00';
  clock.style = 'position: fixed; top: 0; right: 0; font-family:monospace; padding: 0 0 0 0; font-size: 1.5em; z-index: 9999999999;';
  clock.id = 'clock';
  alert(document.body.appendChild(clock));
}


function startTimer() {
  createClock();
  getEndDate();
}

function getEndDate() {
  var hours;
  var now = new Date();

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

  var endDate = new Date();
  endDate.setHours(endHour);

  endDate.setMinutes(endMinute);

  endDate.setSeconds(0);


  loop(endDate);
}



function loop(endDate) {
  now = new Date();

  var diff = endDate - now;

  var minutes = Math.floor(diff % 3.6e6 / 6e4);

  var seconds = Math.floor(diff % 6e4 / 1000);

  if (seconds < 0) {
    run();
    return;
  }

  timeLeft = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

  setText(timeLeft, 'clock');

  window.stopID = setTimeout(loop, 1000, endDate);
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

function isPLC(date) {
  'use strict';
  if (date.getDay != 3) return false;

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
}


function isUnusual(date) {
  dateStr =
    date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

  unusualDays = ['1/26/2018'];
  return unusualDays.indexOf(dateStr) != -1;
}


function run() {
  if (window.stopID) clearTimeout(window.stopID);

  today = new Date();

  window.PLC = isPLC(today);

  if (today.getDay() === 6 || today.getDay() === 0) {
    alert("It's the weekend. Why are you here?");
    return;
  } else if (isUnusual(today)) {
    alert("Today has a unique schedule. Countdown won't work today. Sorry.");
    return;
  } else if (window.PLC) {
    alert('Today is a PLC day. Hurray!');
    startTimer();
  } else {
    startTimer();
  }
}

run();
