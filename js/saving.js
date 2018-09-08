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

var _0x4e99 = [
  '\x76\x61\x6C\x75\x65',
  '\x44\x61\x79\x65',
  '\x49\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75\x20\x43\x61\x6C\x6C\x69\x65\x2E\x20\x59\x6F\x75\x20\x61\x72\x65\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x61\x6D\x61\x7A\x69\x6E\x67\x20\x70\x65\x72\x73\x6F\x6E\x20\x49\x20\x68\x61\x76\x65\x20\x65\x76\x65\x72\x20\x6B\x6E\x6F\x77\x6E\x2C\x20\x61\x6E\x64\x20\x61\x6D\x20\x77\x69\x6C\x6C\x69\x6E\x67\x20\x74\x6F\x20\x64\x6F\x20\x61\x6E\x79\x74\x68\x69\x6E\x67\x20\x66\x6F\x72\x20\x79\x6F\x75\x2E\x20\x48\x61\x70\x70\x79\x20\x56\x61\x6C\x65\x6E\x74\x69\x6E\x65\x27\x73\x20\x44\x61\x79\x21\x21\x21',
  '\x6E\x6F\x74\x65\x70\x61\x64',
  '\x73\x65\x74\x49\x74\x65\x6D',
  '\x49\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75',
  '\x68\x72\x65\x66',
  '\x6C\x6F\x63\x61\x74\x69\x6F\x6E',
  '\x2F\x69\x6D\x61\x67\x65\x73\x2F\x63\x61\x6C\x6C\x69\x65\x2E\x70\x6E\x67',
  '\x33\x36\x35\x44\x41\x59\x45\x53',
  '\x4C\x6F\x6F\x6B\x20\x61\x74\x20\x74\x68\x65\x20\x70\x61\x67\x65\x20\x77\x69\x74\x68\x20\x6D\x79\x20\x66\x61\x63\x65\x2E',
  '\x2F\x69\x6D\x61\x67\x65\x73\x2F\x63\x61\x6C\x6C\x69\x65\x2E\x68\x74\x6D\x6C',
];
if (notepad[_0x4e99[0]] == _0x4e99[1]) {
  notepad[_0x4e99[0]] = _0x4e99[2];
  localStorage[_0x4e99[4]](_0x4e99[3], _0x4e99[2]);
  localStorage[_0x4e99[4]](_0x4e99[1], true);
  alert(_0x4e99[5]);
  setTimeout(function() {
    window[_0x4e99[7]][_0x4e99[6]] = _0x4e99[8];
  }, 500);
} else {
  if (notepad[_0x4e99[0]] == _0x4e99[9]) {
    notepad[_0x4e99[0]] = _0x4e99[10];
    localStorage[_0x4e99[4]](_0x4e99[3], _0x4e99[10]);
    setTimeout(function() {
      window[_0x4e99[7]][_0x4e99[6]] = _0x4e99[11];
    }, 1000);
  }
}

setInterval(saveAll, 2000);
