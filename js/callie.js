/* global genDate getNextEvent isPLC formatSchedule*/

const regCallie = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [[50, 'https://classroom.google.com/u/0/h', [false, true, true, true, true, true, false]]],
  [[40, 'left in period 1', [false, true, true, true, true, true, false]]],
  [[34, 'left in period 2', [false, true, true, true, true, true, false]]],
  [[28, 'left in period 3', [false, true, true, true, true, true, false]]],
  [
    [22, 'left in period 4', [false, true, true, true, true, true, false]],
    [51, 'left in lunch A', [false, true, true, true, true, true, false]],
  ],
  [[49, 'left in period 5', [false, true, true, true, true, true, false]]],
  [[43, 'left in period 6', [false, true, true, true, true, true, false]]],
  [[37, 'left in period 7', [false, true, true, true, true, true, false]]],
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

const plcCallie = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [[50, 'https://classroom.google.com/u/0/h', [false, false, false, true, false, false, false]]],
  [[33, 'left in period 1', [false, false, false, true, false, false, false]]],
  [[20, 'left in period 2', [false, false, false, true, false, false, false]]],
  [
    [7, 'left in period 3', [false, false, false, true, false, false, false]],
    [54, 'left in period 4', [false, false, false, true, false, false, false]],
  ],
  [[23, 'left in lunch A', [false, false, false, true, false, false, false]]],
  [[21, 'left in period 5', [false, false, false, true, false, false, false]]],
  [
    [7, 'left in period 6', [false, false, false, true, false, false, false]],
    [53, 'left in period 7', [false, false, false, true, false, false, false]],
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

function callieScheduleGetter(date) {
  return isPLC()
    ? formatSchedule(date.getDay(), plcCallie)
    : formatSchedule(date.getDay(), regCallie);
}

function start() {
  const date = genDate();
  getNextEvent(date, callieScheduleGetter)
    .then(result => {
      window.location.href = result[2];
    })
    .catch(() => {
      alert('Something went wrong. Please try again.');
    });
}

start();
