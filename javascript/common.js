/*jshint maxerr: 1000 */

//common

function getEndDate() {
  var hours;
  var now = new Date(Date.now() + window.delay);

  if (window.PLC) {
    hours = [45, 33, 20, [7, 54], [23, 52], 21, [7, 53]];
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
  if (typeof getMessage !== 'undefined') {
    loop(endDate, getMessage(period, isArray, arrayNum));
  } else {
    loop(endDate);
  }
}

function getWednesdays(date) {
  'use strict';
  var todaygetWed = new Date(date.getTime());
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

  var wednesdays = getWednesdays(date);
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
