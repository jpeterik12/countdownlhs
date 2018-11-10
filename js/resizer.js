function resizeClock() {
  var clock = document.getElementById('clock');
  var fontSize = parseInt(window.getComputedStyle(clock).fontSize, 10);
  var clockWidth = parseInt(clock.offsetWidth, 10);
  var totalWidth = window.innerWidth;
  var widthMultiplier = totalWidth / clockWidth;
  fontSize *= widthMultiplier * 1;
  clock.style.fontSize = fontSize + 'px';
}

function loadResizer() {
  setInterval(resizeClock, 2000);
}
