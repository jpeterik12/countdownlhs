var customCountdown = document.getElementById('customCountdown');
var delayInput = document.getElementById('delayInput');
var notepad = document.getElementById('notepad');

if (window.localStorage.getItem('custom')) {
  customCountdown.value = localStorage.getItem('custom');
}

if (window.localStorage.getItem('delay')) {
  delayInput.value = localStorage.getItem('delay');
}

if (window.localStorage.getItem('notepad')) {
  notepad.value = localStorage.getItem('notepad');
}

delayInput.onkeypress = function (e) {
  if (e.keyCode == 13) {
    document.getElementById('delayButton').click();
  }
};

customCountdown.onkeypress = function (e) {
  if (e.keyCode == 13) {
    document.getElementById('customButton').click();
  }
};

customCountdown.oninput = saveAll;
delayInput.oninput = saveAll;
notepad.oninput = saveAll;
window.onunload = saveAll;

var saveAll = function () {
  localStorage.setItem('custom', customCountdown.value);
  localStorage.setItem('notepad', notepad.value);
  localStorage.setItem('delay', delayInput.value);
};

setInterval(saveAll, 2000);