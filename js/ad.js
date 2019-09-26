/* eslint-disable no-unused-vars */
function ad() {
  const x = document.createElement('img');
  x.src = 'https://d33wubrfki0l68.cloudfront.net/908916af86778d1874151fabe45ac51a80289a8e/f8218/images/ogs/countdown.svg';
  x.style.height = '80vh';
  x.style.width = '18vw';
  x.style.objectFit = 'contain';
  x.style.zIndex = '2147483647';
  x.style.display = 'block';
//   x.onload = yeet;
  x.style.position = 'absolute';
  x.style.top = '0';
  x.style.left = '55vw'
  document.body.appendChild(x);

  function deleteMe(element) {
    element.parentNode.removeChild(element);
  }

  function yeet() {
    setTimeout(deleteMe, 6000, x);
  }
}
