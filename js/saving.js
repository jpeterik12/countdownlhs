const inputs = [...document.getElementsByTagName('input'), ...document.getElementsByTagName('textarea')]

function saveAll() {
  for (input of inputs) localStorage.setItem(input.id, input.value);
};

for (input of inputs) {
  input.value = localstorage.getItem(input.id) || ''; 
  input.oninput = saveAll;
}
window.onunload = saveAll;


setInterval(saveAll, 2000);
