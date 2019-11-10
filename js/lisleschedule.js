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
      [45, 'until warning bell'],
      [50, 'until period 1'],
    ],
    [
      [40, 'left in period 1'],
      [44, 'until period 2'],
    ],
    [
      [34, 'left in period 2'],
      [38, 'until period 3'],
    ],
    [
      [28, 'left in period 3'],
      [32, 'until period 4'],
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
      [47, 'until period 7'],
    ],
    [
      [37, 'left in period 7'],
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
      [45, 'until warning bell'],
      [50, 'until period 1'],
    ],
    [
      [33, 'left in period 1'],
      [37, 'until period 2'],
    ],
    [
      [20, 'left in period 2'],
      [24, 'until period 3'],
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
      [25, 'until period 6'],
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
      [45, 'until warning bell'],
      [50, 'until period 1'],
    ],
    [
      [17, 'left in period 1'],
      [21, 'until period 2'],
      [48, 'left in period 2'],
      [52, 'until period 3'],
    ],
    [
      [19, 'left in period 3'],
      [23, 'until period 4'],
      [50, 'left in period 4'],
      [54, 'until period 5'],
    ],
    [
      [21, 'left in period 5'],
      [25, 'until period 6'],
      [52, 'left in period 6'],
      [56, 'until period 7'],
    ],
    [
      [22, 'left in period 7'],
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
      [0, 'until Block A'],
    ],
    [
      [30, 'left in Block A'],
      [45, 'until Block B'],
    ],
    [],
    [
      [15, 'left in Block B'],
      [30, 'until Block C'],
    ],
    [],
    [
      [0, 'left in Block C'],
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
      [45, 'until warning bell'],
      [50, 'until period 1'],
    ],
    [
      [26, 'left in period 1'],
      [30, 'until period 2'],
    ],
    [
      [6, 'left in period 2'],
      [10, 'until period 3'],
      [46, 'left in period 3'],
      [50, 'until period 4'],
    ],
    [
      [26, 'left in period 4'],
      [30, 'until period 6'],
    ],
    [
      [6, 'left in period 6'],
      [10, 'until lunch A'],
      [35, 'left in lunch A'],
      [39, 'until lunch B'],
    ],
    [
      [4, 'left in lunch B'],
      [8, 'until lunch C'],
      [33, 'left in lunch C'],
      [37, 'until period 7'],
    ],
    [
      [13, 'left in period 7'],
      [18, 'until assembly'],
    ],
    [
      [37, 'left in assembly'],
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
  veterans: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [45, 'until warning bell'],
      [50, 'until period 1'],
    ],
    [
      [34, 'left in period 1'],
      [40, 'until assembly'],
    ],
    [
      [10, 'left in assembly'],
      [16, 'until period 2'],
    ],
    [
      [0, 'left in period 2'],
      [4, 'until period 3'],
      [48, 'left in period 3'],
      [52, 'until period 4'],
    ],
    [
      [36, 'left in period 4'],
      [40, 'until lunch A'],
    ],
    [
      [5, 'left in lunch A'],
      [9, 'until lunch B'],
      [34, 'left in lunch B'],
      [38, 'until lunch C'],
    ],
    [
      [3, 'left in lunch C'],
      [7, 'until period 6'],
      [50, 'left in period 6'],
      [54, 'until period 7'],
    ],
    [
      [37, 'left in period 7'],
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
    ['2019-11-11', schedules.veterans],
  ],
};


function getDateStr (d) {
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

// Choose schedule based on date
function lisleScheduleGrabber (date) {

  const dateString = getDateStr(date);

  for (const special of dates.special) {
    if (special[0] == dateString) return formatSchedule(special[1]);
  }
  if ([6, 0].includes(date.getDay()) || dates.off.includes(dateString)) {
    return Array(24).fill([]);
  } else if (dates.finals.includes(dateString)) return formatSchedule(schedules.finals);
  else if (dates.half.includes(dateString)) return formatSchedule(schedules.half);
  else if (dates.plc.includes(dateString)) return formatSchedule(schedules.plc);
  else return formatSchedule(schedules.standard);
}

// Change true falses to schedule for day of week
function formatSchedule (schedule) {
  let formatedSchedule = Array(24).fill([]);

  for (let hour = 0; hour < 24; hour++) {
    formatedSchedule[hour] = [];
    for (const event of schedule[hour]) {
      formatedSchedule[hour].push([event[0], event[1]]);
    }
  }
  return formatedSchedule;
}

