/* eslint-disable no-unused-vars */
function ad () {
  if (new Date() > new Date('2/28/2020')) return;
  const x = document.createElement('a');
  // x.target = '_blank';
  // x.href = 'https://www.caffedimoda.com/';
  x.style.display = 'block';
  x.style.position = 'absolute';
  x.style.bottom = '10vh';
  x.style.right = '10vw';
  x.style.width = '80vw';
  x.style.height = '80vh';
  // x.style.transition = 'all 1s';

  const y = document.createElement('img');
  y.src = '/images/ads/josh.png';
  y.style.objectFit = 'contain';
  y.style.zIndex = '2147483647';
  // y.onload = yeet;
  y.style.height = '100%';
  y.style.width = '100%';

  x.appendChild(y);
  moveMe(x)
  document.body.appendChild(x);

  function deleteMe (element) {
    element.parentNode.removeChild(element);
  }

  function moveMe (element) {
    element.style.right = '27vw';
    element.style.bottom = '25vh';
    element.style.height = '70vh';
    element.style.width = '18vw';
  }

  // function yeet () {
  // setTimeout(deleteMe, 6000, x);
  // setTimeout(moveMe, 6000, x);
  // }
}
