var notepads = [
  document.getElementById('notepad1'),
  document.getElementById('notepad2'),
  document.getElementById('notepad3'),
  document.getElementById('notepad4'),
  document.getElementById('notepad5'),
  document.getElementById('notepad6'),
  document.getElementById('notepad7'),
  document.getElementById('notepad8'),
]

function saveAll() {
  for (let notepad of notepads) {
  localStorage.setItem(notepad.id, notepad.value);
  }
}

for (let notepad of notepads) {
  if (window.localStorage.getItem(notepad.id)) {
    notepad.value = window.localStorage.getItem(notepad.id);
  }
  notepad.oninput = saveAll
}

