/*jshint maxerr: 1000 */

//bookmarklet

function clockMove() {
  if (this.style.top == '0px') {
    if (this.style.right == '0px') {
      this.style.top = 'calc(100% - ' + this.offsetHeight + 'px)';
      this.onmouseover = null;
      setTimeout(function(diver){ diver.onmouseover = clockMove }, 1000, this);
    } else {
      this.style.right = '0px';
      this.onmouseover = null;
      setTimeout(function(diver){ diver.onmouseover = clockMove }, 1000, this);
    }
  } else {
    if (this.style.right == '0px') {
      this.style.right = 'calc(100% - ' + this.offsetWidth + 'px)';
      this.onmouseover = null;
      setTimeout(function(diver){ diver.onmouseover = clockMove }, 1000, this);
    } else {
      this.style.top = '0px';
      this.onmouseover = null;
      setTimeout(function(diver){ diver.onmouseover = clockMove }, 1000, this);
    }
  }
}
function createClock() {
  var deleter = document.getElementById("clock-div");
  if (deleter) deleter.parentNode.removeChild(deleter);

  clockdiv = document.createElement('div');
  clockdiv.innerHTML = '<p style="z-index: inherit; font-family:monospace; padding: 0 0 0 0; font-size: 20px; border: 1px solid #000000; background-color: white;" id=clock>00:00</p>';
  clockdiv.style = 'z-index: 2147483647; position: fixed; top: 0px; right: 0px; padding: 0 0 0 0; transition: all 1s ease-out;';
  clockdiv.id = 'clock-div';


  clockdiv.onmouseover = clockMove;

  document.body.appendChild(clockdiv);
}

function startTimer() {
  createClock();
  getEndDate();
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

function run() {
  if (window.stopID) clearTimeout(window.stopID);

  today = new Date();
  
  window.delay = 0;

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
