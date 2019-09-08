/* global start */
//bookmarklet

function createClock() {
  var deleter = document.getElementById('cdlhsparent');
  if (deleter) deleter.parentNode.removeChild(deleter);

  var cdlhsparent = document.createElement('div');
  cdlhsparent.innerHTML =
    '<p id="cdlhsclock" style="z-index: inherit; font-family:monospace; padding: 0; margin: 0; font-size: 20px;">00:00</p><style>@keyframes cdlhsl-r {from {left: 0;} to {left: calc(100vw - 60px);}} @keyframes cdlhsu-d {from {top: 0;} to {top: calc(100vh - 20px);}}</style>';
  cdlhsparent.style =
    'z-index: 2147483647; position: fixed; height: 20px; padding: 0; margin: 0; border: 1px solid #000000; background-color: white; animation:cdlhsl-r 5s linear 100 alternate, cdlhsu-d 4s linear 100 alternate;';
  cdlhsparent.id = 'cdlhsparent';

  document.body.appendChild(cdlhsparent);
}

createClock();

setTimeout(() => {
  start();
}, 2000);
