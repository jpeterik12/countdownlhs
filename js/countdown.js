const url = 'https://api.jsonbin.io/b/5df135581c19843d88ea6645/latest';
const key = '$2b$10$kpjbv4KgMM4fo6T3xnJOueEd.l6p74c96/RwdUin.Wq6Y6q7m42vu';

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
    d,
    h,
    m,
    s,
  };
}

function toISODateOnly(date, utc) {
  if (utc) return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`
  else return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function expandDateRange(range) {
  if (!range.includes('/')) return [range];
  const date = new Date(range.split('/')[0] + 'T00:00:00Z');
  const dates = [range.split('/')[0]];
  while (toISODateOnly(date, true) != range.split('/')[1]) {
    date.setDate(date.getDate() + 1);
    dates.push(toISODateOnly(date, true));
  }
  return dates;
}

function processScheduleArr(scheduleArr) {
  const conflictDates = {};
  for (schedule of scheduleArr) {
    if (schedule.layer) {
      if (!conflictDates[schedule.layer]) conflictDates[schedule.layer] = [];
      if (!conflictDates[schedule.layer][schedule.priority]) conflictDates[schedule.layer][schedule.priority] = [];
      if (schedule.dates) conflictDates[schedule.layer][schedule.priority].push(...schedule.dates);
    }
  }
  for (schedule of scheduleArr) {
    if (schedule.layer) {
      if (!schedule.skipDates) schedule.skipDates = [];
      for (let i = schedule.priority + 1; i < conflictDates[schedule.layer].length; i++) {
        schedule.skipDates.push(...conflictDates[schedule.layer][i]);
      }
    }
    if (schedule.dates) {
      const tempStart = [];
      for (date of schedule.dates) {
        tempStart.push(...expandDateRange(date));
      }
      schedule.dates = tempStart;
    }
    if (schedule.skipDates) {
      const tempSkip = [];
      for (date of schedule.skipDates) {
        tempSkip.push(...expandDateRange(date));
      }
      schedule.skipDates = tempSkip;
    }
    const newEvents = [];
    for (event of schedule.events) {
      if (event.time) event.time = Number(event.time.split(':')[0] * 60) + Number(event.time.split(':')[1]);
      if (event.startTime) event.time = Number(event.startTime.split(':')[0] * 60) + Number(event.startTime.split(':')[1]);
      if (event.endTime) newEvents.push({
        name: event.name,
        time: Number(event.endTime.split(':')[0] * 60) + Number(event.endTime.split(':')[1]),
        end: true,
      });
      delete event.startTime;
      delete event.endTime;
    }
    schedule.events.push(...newEvents);
    schedule.events.sort((a, b) => a.time - b.time);
  }
  return scheduleArr;
}

function getNextTime(currentDate, scheduleArr) {
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][currentDate.getDay()];
  const time = currentDate.getHours() * 60 + currentDate.getMinutes();
  let nextEvent = {
    time: Infinity,
  };
  for (schedule of scheduleArr) {
    if (!schedule.enabled) continue;
    if (schedule.days && !schedule.days[day]) continue;
    if (schedule.dates && !schedule.dates.includes(toISODateOnly(currentDate))) continue;
    if (schedule.skipDates && schedule.skipDates.includes(toISODateOnly(currentDate))) continue;
    const nextTime = Math.min(...schedule.events.filter((event) => {
      return event.time > time;
    }).map((x) => x.time), nextEvent.time);
    if (isFinite(nextTime)) nextEvent = schedule.events.find((event) => event.time === nextTime);
  }
  if (isFinite(nextEvent.time)) return nextEvent;
}

let stopper;
function startCountdown(scheduleArr, countdownDate) {
  let eventDate;
  let nextEvent;
  if (countdownDate) {
    eventDate = countdownDate;
    nextEvent = {message: 'Custom Date'}
  } else setEventDate();


  function setEventDate() {
    let mathDate = new Date();
    let dayOffset = 0;
    do {
      nextEvent = getNextTime(mathDate, scheduleArr);
      if (!nextEvent) {
        dayOffset++;
        mathDate.setDate(mathDate.getDate() + 1);
        mathDate.setHours(0);
        mathDate.setMinutes(0);
      }
    } while (!nextEvent);
    eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + dayOffset)
    eventDate.setHours(0);
    eventDate.setMinutes(nextEvent.time);
    eventDate.setSeconds(0);
    eventDate.setMilliseconds(0);
  }
  if (stopper) clearInterval(stopper);
  stopper = setInterval(() => {
    diff = convertMS(eventDate - Date.now());
    if (diff.d < 0) {
      setEventDate();
      diff = convertMS(eventDate - Date.now());
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
    const timeMessage = timeString + ` ${!nextEvent.end ? 'until' : 'left in'} ` + nextEvent.name;
    if (document) {
      const clock = document.getElementById('cdlhsclock')
      if (clock) document.getElementById('cdlhsclock').innerHTML = timeString;
    }
    if (
        window.location.hostname === 'www.countdownlhs.ga' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === 'countdownlhs.jpeterik12.repl.co' ||
        window.location.hostname === 'jpsys.jpeterik12.repl.co' ||
        window.location.hostname === 'jp12.ga' ||
        window.location.hostname === 'www.jp12.ga'
      )
        document.title = timeMessage;

    console.log(timeMessage);
  }, 1000);
}

function start(date) {
  if (typeof process !== "undefined") {
  process.env.TZ = 'America/Chicago'
  require('https').get(url, {
    headers: {
      'secret-key': key
    }
  }).on('response', function (response) {
    var body = '';
    var i = 0;
    response.on('data', function (chunk) {
      i++;
      body += chunk;
    });
    response.on('end', function () {
      startCountdown(processScheduleArr(JSON.parse(body), date));
    });
  });
} else if (window) {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        startCountdown(processScheduleArr(JSON.parse(req.response)), date);
    }
  };

  req.open("GET", url, true);
  req.setRequestHeader("secret-key", key);
  req.send();
} else {
  console.log('Where the fuck is this code running?')
}
}