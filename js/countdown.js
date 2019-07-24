/* eslint no-console: 0 */
/* eslint-global lisleScheduleGrabber */

// Get next event using schedules from scheduleGetter
function getNextEvent(startDate, scheduleGetter) {
  return new Promise((resolve, reject) => {
    let dayOffset = 0;
    let tempDate = new Date(startDate.getTime());

    do {
      tempDate.setDate(startDate.getDate() + dayOffset);
      const todaySchedule = scheduleGetter(tempDate);
      let hourOffset = 0;
      let hour = 0;

      do {
        if (dayOffset === 0 && hourOffset === 0) {
          hour = startDate.getHours();
          for (let event of todaySchedule[hour]) {
            if (event[0] > startDate.getMinutes()) {
              event.unshift(hour);
              event.push(0);
              resolve(event);
              return;
            }
          }
        } else {
          for (let event of todaySchedule[hour]) {
            event.unshift(hour);
            event.push(dayOffset);
            resolve(event);
            return;
          }
        }

        hourOffset++;
        hour++;
      } while (hour < 24);
      dayOffset++;
    } while (dayOffset < 7);
    reject(new Error('No Valid Events'));
  });
}

// generate a date based on startDate and event array
function createDate(eventArray, startDate) {
  const endDate = new Date(startDate.getTime());
  endDate.setDate(endDate.getDate() + eventArray[3]);
  endDate.setHours(eventArray[0]);
  endDate.setMinutes(eventArray[1]);
  endDate.setSeconds(0);
  endDate.message = eventArray[2];
  return endDate;
}

// Create date with delay or other special cases
function genDate() {
  return new Date(Date.now() + 1000 * window.delay);
}

// Turn ms to d,h,m,s
function convertMS(ms) {
  let d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return {
    d: d,
    h: h,
    m: m,
    s: s,
  };
}

// Actual countdown logic
function startTimer(endDate) {
  return new Promise((resolve, reject) => {
    window.timer = setInterval(() => {
      let diff = convertMS(endDate - genDate());
      if (diff.d < 0) {
        reject(new Error('Event Ended'));
        clearInterval(window.timer);
        return;
      }
      let timeString;
      if (diff.d) {
        timeString = [
          diff.d,
          ('0' + diff.h).slice(-2),
          ('0' + diff.m).slice(-2),
          ('0' + diff.s).slice(-2),
        ];
      } else if (diff.h) {
        timeString = [('0' + diff.h).slice(-2), ('0' + diff.m).slice(-2), ('0' + diff.s).slice(-2)];
      } else {
        timeString = [('0' + diff.m).slice(-2), ('0' + diff.s).slice(-2)];
      }
      timeString = timeString.join(':');
      const timeMessage = timeString + ' ' + endDate.message;
      document.getElementById('clock').innerHTML = timeString;
      if (
        window.location.hostname === 'www.countdownlhs.ga' ||
        window.location.hostname === 'localhost'
      )
        document.title = timeMessage;
      // console.log(timeString + '\n' + timeMessage);
    }, 1000);
  });
}

// Run everything
function start(customDate) {
  if (window.timer) {
    clearInterval(window.timer);
  }
  window.delay = localStorage.getItem('delay');

  if (customDate) {
    customDate.message = 'until custom date.';
    startTimer(customDate);
    return;
  }


  const date = genDate();

  // eslint-disable-next-line no-undef
  getNextEvent(date, lisleScheduleGrabber)
    .then((result) => {
      return createDate(result, date);
    })
    .then((result) => {
      return startTimer(result);
    })
    .catch((error) => {
      if (error.message === 'Event Ended') return;
      throw error;
    })
    .then(() => {
      start();
    })
    .catch((error) => {
      alert('Something went wrong. Please reload.');
      console.log(error);
    });
}

// Onload
// start();
this.start = start;