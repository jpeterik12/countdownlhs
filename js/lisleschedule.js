/* eslint-disable no-unused-vars */
// Normal Mon-Fri
const schedules = {
  standard: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell', [false, true, true, true, true, true, false]],
      [50, 'until period 1', [false, true, true, true, true, true, false]],
    ],
    [
      [40, 'left in period 1', [false, true, true, true, true, true, false]],
      [44, 'until period 2', [false, true, true, true, true, true, false]],
    ],
    [
      [34, 'left in period 2', [false, true, true, true, true, true, false]],
      [38, 'until period 3', [false, true, true, true, true, true, false]],
    ],
    [
      [28, 'left in period 3', [false, true, true, true, true, true, false]],
      [32, 'until period 4', [false, true, true, true, true, true, false]],
    ],
    [
      [22, 'left in period 4', [false, true, true, true, true, true, false]],
      [26, 'until lunch A', [false, true, true, true, true, true, false]],
      [51, 'left in lunch A', [false, true, true, true, true, true, false]],
      [55, 'until lunch B', [false, true, true, true, true, true, false]],
    ],
    [
      [20, 'left in lunch B', [false, true, true, true, true, true, false]],
      [24, 'until lunch C', [false, true, true, true, true, true, false]],
      [49, 'left in lunch C', [false, true, true, true, true, true, false]],
      [53, 'until period 6', [false, true, true, true, true, true, false]],
    ],
    [
      [43, 'left in period 6', [false, true, true, true, true, true, false]],
      [47, 'until period 7', [false, true, true, true, true, true, false]],
    ],
    [
      [37, 'left in period 7', [false, true, true, true, true, true, false]],
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
  ],
  plc: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell', [false, false, false, true, false, false, false]],
      [50, 'until period 1', [false, false, false, true, false, false, false]],
    ],
    [
      [33, 'left in period 1', [false, false, false, true, false, false, false]],
      [37, 'until period 2', [false, false, false, true, false, false, false]],
    ],
    [
      [20, 'left in period 2', [false, false, false, true, false, false, false]],
      [24, 'until period 3', [false, false, false, true, false, false, false]],
    ],
    [
      [7, 'left in period 3', [false, false, false, true, false, false, false]],
      [11, 'until period 4', [false, false, false, true, false, false, false]],
      [54, 'left in period 4', [false, false, false, true, false, false, false]],
      [58, 'until lunch A', [false, false, false, true, false, false, false]],
    ],
    [
      [23, 'left in lunch A', [false, false, false, true, false, false, false]],
      [27, 'until lunch B', [false, false, false, true, false, false, false]],
      [52, 'left in lunch B', [false, false, false, true, false, false, false]],
      [56, 'until lunch C', [false, false, false, true, false, false, false]],
    ],
    [
      [21, 'left in lunch C', [false, false, false, true, false, false, false]],
      [25, 'until period 6', [false, false, false, true, false, false, false]],
    ],
    [
      [7, 'left in period 6', [false, false, false, true, false, false, false]],
      [11, 'until period 7', [false, false, false, true, false, false, false]],
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
  ],
  half: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell', [false, true, true, true, true, true, false]],
      [50, 'until period 1', [false, true, true, true, true, true, false]],
    ],
    [
      [17, 'left in period 1', [false, true, true, true, true, true, false]],
      [21, 'until period 2', [false, true, true, true, true, true, false]],
      [48, 'left in period 2', [false, true, true, true, true, true, false]],
      [52, 'until period 3', [false, true, true, true, true, true, false]],
    ],
    [
      [19, 'left in period 3', [false, true, true, true, true, true, false]],
      [23, 'until period 4', [false, true, true, true, true, true, false]],
      [50, 'left in period 4', [false, true, true, true, true, true, false]],
      [54, 'until period 5', [false, true, true, true, true, true, false]],
    ],
    [
      [21, 'left in period 5', [false, true, true, true, true, true, false]],
      [25, 'until period 6', [false, true, true, true, true, true, false]],
      [52, 'left in period 6', [false, true, true, true, true, true, false]],
      [56, 'until period 7', [false, true, true, true, true, true, false]],
    ],
    [
      [22, 'left in period 7', [false, true, true, true, true, true, false]],
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
    [],
    [],
  ],
  finals: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [0, 'until Block A', [false, true, true, true, true, true, false]],
    ],
    [
      [30, 'left in Block A', [false, true, true, true, true, true, false]],
      [45, 'until Block B', [false, true, true, true, true, true, false]],
    ],
    [],
    [
      [15, 'left in Block B', [false, true, true, true, true, true, false]],
      [30, 'until Block C', [false, true, true, true, true, true, false]],
    ],
    [],
    [
      [0, 'left in Block C', [false, true, true, true, true, true, false]],
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
  ],
  hocoPep: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell', [false, false, false, false, false, true, false]],
      [50, 'until period 1', [false, false, false, false, false, true, false]],
    ],
    [
      [26, 'left in period 1', [false, false, false, false, false, true, false]],
      [30, 'until period 2', [false, false, false, false, false, true, false]],
    ],
    [
      [6, 'left in period 2', [false, false, false, false, false, true, false]],
      [10, 'until period 3', [false, false, false, false, false, true, false]],
      [46, 'left in period 3', [false, false, false, false, false, true, false]],
      [50, 'until period 4', [false, false, false, false, false, true, false]],
    ],
    [
      [26, 'left in period 4', [false, false, false, false, false, true, false]],
      [30, 'until period 6', [false, false, false, false, false, true, false]],
    ],
    [
      [6, 'left in period 6', [false, false, false, false, false, true, false]],
      [10, 'until lunch A', [false, false, false, false, false, true, false]],
      [35, 'left in lunch A', [false, false, false, false, false, true, false]],
      [39, 'until lunch B', [false, false, false, false, false, true, false]],
    ],
    [
      [4, 'left in lunch B', [false, false, false, false, false, true, false]],
      [8, 'until lunch C', [false, false, false, false, false, true, false]],
      [33, 'left in lunch C', [false, false, false, false, false, true, false]],
      [37, 'until period 7', [false, false, false, false, false, true, false]],
    ],
    [
      [13, 'left in period 7', [false, false, false, false, false, true, false]],
      [18, 'until assembly', [false, false, false, false, false, true, false]],
    ],
    [
      [37, 'left in assembly', [false, false, false, false, false, true, false]],
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
  ]
};

const dates = {
  plc: [
    '2019-09-04',
    '2019-09-18',
    '2019-10-02',
    '2019-10-16',
    '2019-10-24',
    '2019-11-06',
    '2019-11-20',
    '2019-12-04',
    '2019-01-08',
    '2019-01-22',
    '2019-02-05',
    '2019-02-19',
    '2019-03-04',
    '2019-03-18',
    '2019-04-08',
    '2019-04-22',
  ],
  off: [
    '2019-09-02',
    '2019-10-11',
    '2019-10-14',
    '2019-10-25',
    // Thanksgiving Break
    '2019-11-27',
    '2019-11-28',
    '2019-11-29',
    // Winter Break
    '2019-12-23',
    '2019-12-24',
    '2019-12-25',
    '2019-12-26',
    '2019-12-27',
    '2019-12-30',
    '2019-12-31',
    '2019-01-01',
    '2020-01-02',
    '2020-01-03',

    '2020-01-20',
    '2020-02-14',
    '2020-02-17',
    '2020-02-28',
    // Spring Break
    '2020-03-30',
    '2020-03-31',
    '2020-04-01',
    '2020-04-02',
    '2020-04-03',

    '2020-04-10',
  ],
  half: [
    '2019-09-20',
    '2019-11-01',
    '2020-01-17',
    '2020-05-08',
  ],
  finals: [

  ],
  special: [
    ['2019-09-27', schedules.hocoPep],
  ],
};


function getDateStr(d) {
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

// Choose schedule based on date
function lisleScheduleGrabber(date) {

  const dateString = getDateStr(date);

  for (special of dates.special) {
    if (special[0] == dateString) return formatSchedule(date.getDay(), special[1]);
  }
  if (dates.off.includes(dateString)) {
    return Array(24).fill([]);
  } else if (dates.finals.includes(dateString)) return formatSchedule(date.getDay(), schedules.finals);
  else if (dates.half.includes(dateString)) return formatSchedule(date.getDay(), schedules.half);
  else if (dates.plc.includes(dateString)) return formatSchedule(date.getDay(), schedules.plc);
  else return formatSchedule(date.getDay(), schedules.standard);
}

// Change true falses to schedule for day of week
function formatSchedule(day, schedule) {
  let formatedSchedule = Array(24).fill([]);

  for (let hour = 0; hour < 24; hour++) {
    formatedSchedule[hour] = [];
    for (const event of schedule[hour]) {
      if (event[2][day]) formatedSchedule[hour].push([event[0], event[1]]);
    }
  }
  return formatedSchedule;
}

