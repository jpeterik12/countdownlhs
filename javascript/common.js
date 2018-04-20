/*jshint maxerr: 1000 */

//common

function dater() {
  if (!window.delay) window.delay = 0;
  date = new Date(Date.now() + window.delay);
  // date = new Date();
  // date.setMinutes(date.getMinutes()-10);
  return date;
}

function getNextTime(array, start, currentMinute) {
  arrayTest = array.slice(start);

  for (var x in arrayTest) {
    if (arrayTest[x].length) {
      if (x === '0') {
        for (var y in arrayTest[x]) {
          if (arrayTest[x][y][0] > currentMinute)
            return [start, arrayTest[x][y][0], arrayTest[x][y][1], false];
        }
      } else
        return [
          parseInt(x) + start,
          arrayTest[x][0][0],
          arrayTest[x][0][1],
          false,
        ];
    }
  }
  for (var z in array) {
    if (array[z].length) {
      return [parseInt(z), array[z][0][0], array[z][0][1], true];
    }
  }
  console.log('No Schedule');
  return 'Ohno';
}

function isPLC(date) {
  'use strict';
  if (date.getDay() != 3) return false;
  function getWednesdays(date) {
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
  var wednesdays = getWednesdays(date);
  var wednesdayOne = wednesdays[0];
  var wednesdayThree = wednesdays[2];
  return (
    date.getDate() == wednesdayOne.getDate() ||
    date.getDate() == wednesdayThree.getDate()
  );
}

function isUnusual(date) {
  dateStr =
    date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

  unusualDays = ['3/2/2018','3/23/2018','4/20/2018'];
  return unusualDays.indexOf(dateStr) != -1;
}

function setText(text, ID) {
  if (document.getElementById(ID)) {
    document.getElementById(ID).innerHTML = text;
  } else if (ID == 'title' && (window.location.hostname == 'www.countdownlhs.ga' || window.location.hostname == 'localhost')) {
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
