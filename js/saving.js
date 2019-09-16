const inputs = [...document.getElementsByTagName('input'), ...document.getElementsByTagName('textarea')].filter(x => x.type !== 'button');

function saveAll() {
  for (input of inputs) localStorage.setItem(input.id, input.value);
};

for (input of inputs) {
  input.value = localStorage.getItem(input.id) || ''; 
  input.oninput = saveAll;
}
window.onunload = saveAll;


setInterval(saveAll, 2000);
