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

delayInput.onkeypress = function(e) {
  if (e.keyCode == 13) {
    document.getElementById('delayButton').click();
  }
};

customCountdown.onkeypress = function(e) {
  if (e.keyCode == 13) {
    document.getElementById('customButton').click();
  }
};

customCountdown.oninput = saveAll;
delayInput.oninput = saveAll;
notepad.oninput = saveAll;
window.onunload = saveAll;

var saveAll = function() {
  localStorage.setItem('custom', customCountdown.value);
  localStorage.setItem('notepad', notepad.value);
  localStorage.setItem('delay', delayInput.value);
};

if (localStorage.getItem('Daye') == 'true') {
  notepad.classList.add('daye');
}

if (notepad.value == 'Daye') {
  notepad.value =
    'I love you Callie. You are the most amazing person I have ever known, and am willing to do anything for you. Happy Valentine\'s Day!!!';
  localStorage.setItem(
    'notepad',
    'I love you Callie. You are the most amazing person I have ever known, and am willing to do anything for you. Happy Valentine\'s Day!!!'
  );
  localStorage.setItem('Daye', true);
  alert('I love you');
  setTimeout(function() {
    window.location.href = '/images/callie.png';
  }, 500);
} else if (notepad.value == '365DAYES') {
  notepad.value = 'Look at the page with my face.';
  localStorage.setItem('notepad', 'Look at the page with my face.');
  setTimeout(function() {
    window.location.href = '/images/callie.html';
  }, 1000);
}

setInterval(saveAll, 2000);
