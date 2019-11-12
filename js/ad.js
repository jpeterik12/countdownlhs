/* eslint-disable no-unused-vars */
function ad () {
  const x = document.createElement('img');
  x.src = '/images/ads/caffe_di_moda.png';
  x.style.objectFit = 'contain';
  x.style.zIndex = '2147483647';
  x.style.display = 'block';
  x.onload = yeet;
  x.style.position = 'absolute';
  x.style.top = '10vh';
  x.style.left = '10vw';
  x.style.bottom = '10vh';
  x.style.right = '10vw';

  document.body.appendChild(x);

  function deleteMe (element) {
    element.parentNode.removeChild(element);
  }

  function yeet () {
    setTimeout(deleteMe, 6000, x);
  }
}
