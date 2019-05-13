// Normal Mon-Fri
const normalSchedule = [
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
    [37, 'left in period 7', [false, true, true, true, true, true, false]]
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

// 1 & 3 Wednesdays
const plcSchedule = [
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
];

// Special Case
const halfSchedule = [
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
    [22, 'left in period 7', [false, true, true, true, true, true, false]]
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
];

const finalsScheduleTues = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [
    [0, 'until study period', [false, true, true, true, true, true, false]]
  ],
  [
    [30, 'left study period', [false, true, true, true, true, true, false]],
    [45, 'until period 6', [false, true, true, true, true, true, false]],
  ],
  [],
  [
    [15, 'left in period 6', [false, true, true, true, true, true, false]],
    [30, 'until period 7', [false, true, true, true, true, true, false]],
  ],
  [],
  [
    [0, 'left in period 7', [false, true, true, true, true, true, false]]
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

const finalsScheduleWed = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [
    [0, 'until period 3', [false, true, true, true, true, true, false]]
  ],
  [
    [30, 'left in period 3', [false, true, true, true, true, true, false]],
    [45, 'until period 4', [false, true, true, true, true, true, false]],
  ],
  [],
  [
    [15, 'left in period 4', [false, true, true, true, true, true, false]],
    [30, 'until period 5', [false, true, true, true, true, true, false]],
  ],
  [],
  [
    [0, 'left in period 5', [false, true, true, true, true, true, false]]
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

const finalsScheduleThurs = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [
    [0, 'until period 1', [false, true, true, true, true, true, false]]
  ],
  [
    [30, 'left in period 1', [false, true, true, true, true, true, false]],
    [45, 'until period 2', [false, true, true, true, true, true, false]],
  ],
  [],
  [
    [15, 'left in period 2', [false, true, true, true, true, true, false]],
    [30, 'until make-up', [false, true, true, true, true, true, false]],
  ],
  [],
  [
    [0, 'left in make-up', [false, true, true, true, true, true, false]]
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

const hocoPepSchedule = [
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
    [26, 'left in period 1', [false, false, false, true, false, false, false]],
    [30, 'until period 2', [false, false, false, true, false, false, false]],
  ],
  [
    [6, 'left in period 2', [false, false, false, true, false, false, false]],
    [10, 'until period 3', [false, false, false, true, false, false, false]],
    [46, 'left in period 3', [false, false, false, true, false, false, false]],
    [50, 'until period 4', [false, false, false, true, false, false, false]],
  ],
  [
    [26, 'left in period 4', [false, false, false, true, false, false, false]],
    [30, 'until period 6', [false, false, false, true, false, false, false]],
  ],
  [
    [6, 'left in period 6', [false, false, false, true, false, false, false]],
    [10, 'until lunch A', [false, false, false, true, false, false, false]],
    [35, 'left in lunch A', [false, false, false, true, false, false, false]],
    [39, 'until lunch B', [false, false, false, true, false, false, false]],
  ],
  [
    [4, 'left in lunch B', [false, false, false, true, false, false, false]],
    [8, 'until lunch C', [false, false, false, true, false, false, false]],
    [33, 'left in lunch C', [false, false, false, true, false, false, false]],
    [37, 'until period 7', [false, false, false, true, false, false, false]],
  ],
  [
    [13, 'left in period 7', [false, false, false, true, false, false, false]],
    [18, 'until assembly', [false, false, false, true, false, false, false]],
  ],
  [
    [37, 'left in assembly', [false, false, false, true, false, false, false]]
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

const veteransSchedule = [
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
    [34, 'left in period 1', [false, false, false, true, false, false, false]],
    [40, 'until assembly', [false, false, false, true, false, false, false]],
  ],
  [
    [8, 'left in assembly', [false, false, false, true, false, false, false]],
    [14, 'until period 2', [false, false, false, true, false, false, false]],
    [58, 'left in period 2', [false, false, false, true, false, false, false]],
  ],
  [
    [2, 'until period 3', [false, false, false, true, false, false, false]],
    [46, 'left in period 3', [false, false, false, true, false, false, false]],
    [50, 'until period 4', [false, false, false, true, false, false, false]],
  ],
  [
    [34, 'left in period 4', [false, false, false, true, false, false, false]],
    [38, 'until lunch A', [false, false, false, true, false, false, false]],
  ],
  [
    [3, 'left in lunch A', [false, false, false, true, false, false, false]],
    [7, 'until lunch B', [false, false, false, true, false, false, false]],
    [32, 'left in lunch B', [false, false, false, true, false, false, false]],
    [36, 'until lunch C', [false, false, false, true, false, false, false]],
  ],
  [
    [1, 'left in lunch C', [false, false, false, true, false, false, false]],
    [5, 'until period 6', [false, false, false, true, false, false, false]],
    [49, 'left in period 6', [false, false, false, true, false, false, false]],
    [53, 'until in period 7', [false, false, false, true, false, false, false]],
  ],
  [
    [37, 'left in period 7', [false, false, false, true, false, false, false]]
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

const springAssemblySchedule = [
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
    [30, 'left in period 1', [false, false, false, true, false, false, false]],
    [34, 'until period 2', [false, false, false, true, false, false, false]],
  ],
  [
    [14, 'left in period 2', [false, false, false, true, false, false, false]],
    [18, 'until period 3', [false, false, false, true, false, false, false]],
    [58, 'left in period 3', [false, false, false, true, false, false, false]],
  ],
  [
    [2, 'until period 4', [false, false, false, true, false, false, false]],
    [42, 'left in period 4', [false, false, false, true, false, false, false]],
    [46, 'until lunch A', [false, false, false, true, false, false, false]],
  ],
  [
    [11, 'left in lunch A', [false, false, false, true, false, false, false]],
    [15, 'until lunch B', [false, false, false, true, false, false, false]],
    [40, 'left in lunch B', [false, false, false, true, false, false, false]],
    [44, 'until lunch C', [false, false, false, true, false, false, false]],
  ],
  [
    [9, 'left in lunch C', [false, false, false, true, false, false, false]],
    [13, 'until period 6', [false, false, false, true, false, false, false]],
    [53, 'left in period 6', [false, false, false, true, false, false, false]],
    [57, 'until period 7', [false, false, false, true, false, false, false]],
  ],
  [
    [37, 'left in period 7', [false, false, false, true, false, false, false]],
    [45, 'until period 6', [false, false, false, true, false, false, false]],
  ],
  [
    [37, 'left in period 6', [false, false, false, true, false, false, false]],
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


// Checks PLC based on date
function isPLC(date) {
  let tempDate = new Date(date.getTime());
  let wednesdays = [];
  tempDate.setDate(1);

  while (tempDate.getDay() != 3) {
    tempDate.setDate(tempDate.getDate() + 1);
  }
  while (tempDate.getMonth() === date.getMonth()) {
    wednesdays.push(tempDate.getDate());
    tempDate.setDate(tempDate.getDate() + 7);
  }

  return date.getDate() === wednesdays[0] || date.getDate() === wednesdays[2];
}

function isHalf(date) {
  const dateString =
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear();
  const half = ['09/21/2018', '11/02/2018', '01/18/2018', '04/12/2019', '05/10/2019'];
  return half.includes(dateString);
}

function isOff(date) {
  const dateString =
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear();
  const off = [
    '08/13/2018',
    '08/14/2018',
    '09/03/2018',
    '10/05/2018',
    '10/08/2018',
    '10/26/2018',
    '11/21/2018',
    '11/22/2018',
    '11/23/2018',
    '12/24/2018',
    '12/25/2018',
    '12/26/2018',
    '12/27/2018',
    '12/28/2018',
    '12/31/2018',
    '01/01/2019',
    '01/02/2019',
    '01/03/2019',
    '01/04/2019',
    '01/21/2019',
    '02/18/2019',
    '02/15/2019',
    '03/01/2019',
    '03/25/2019',
    '03/26/2019',
    '03/27/2019',
    '03/28/2019',
    '03/29/2019',
    '04/19/2019',
  ];
  return off.includes(dateString);
}

function isUnusual(date) {
  const dateString =
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear();
  const unusual = ['03/22/2019'];
  // return unusual.includes(dateString);
  if (unusual.includes(dateString)) return springAssemblySchedule;
}

function isFinals(date) {
  const dateString =
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear();
  const finals = [
    '12/19/2018',
    '12/20/2018',
    '12/21/2018',
    '05/28/2019',
    '05/29/2019',
    '05/30/2019',
  ];

  return finals.includes(dateString);
}
// Choose schedule based on date
function lisleScheduleGrabber(date) {
  if (isOff(date)) return Array(24).fill([]);
  else if (isUnusual(date)) {
    if (typeof isUnusual(date) === 'boolean') {
      alert('The next day on the schedule is unusual, skipping.');
      return Array(24).fill([]);
    } else {
      return formatSchedule(3, isUnusual(date));
    }
  } else if (isFinals(date)) {
    switch (date.getDay()) {
      case 2:
        return formatSchedule(5, finalsScheduleTues);
        break;
      case 3:
        return formatSchedule(3, finalsScheduleWed);
        break;
      case 4:
        return formatSchedule(4, finalsScheduleThurs);
        break;
    }
  } else if (isHalf(date)) return formatSchedule(date.getDay(), halfSchedule);
  else if (isPLC(date)) return formatSchedule(date.getDay(), plcSchedule);
  else return formatSchedule(date.getDay(), normalSchedule);
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