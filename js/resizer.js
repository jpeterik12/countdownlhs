function resizeClock() {
  var clock = document.getElementById('clock');
  var fontSize = parseInt(window.getComputedStyle(clock).fontSize, 10);
  var clockWidth = parseInt(clock.offsetWidth, 10);
  var totalWidth = window.innerWidth;
  var widthMultiplier = totalWidth / clockWidth;
  fontSize *= widthMultiplier * 1;
  var windowSize = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 20)
  if (fontSize >= windowSize) fontsize = windowSize
  clock.style.fontSize = fontSize + 'px';
}

function loadResizer() {
  document.body.addEventListener('load', () => {setTimeout(1000, resizeClock)});
  document.body.addEventListener('resize', resizeClock);
}
