window.onload = () => {
  const x = document.createElement('img');
  x.src = '/images/ads/X1.jpg';
  x.style.height = '90vh';
  x.style.position = 'fixed';
  x.style.top = 'calc(50% - 45vh)';
  x.style.left = 'calc(50% - 45vh)';
  x.style.zIndex = '2147483647';
  document.body.appendChild(x);

  function deleteMe(element) {
    element.parentNode.removeChild(element);
  }

  setTimeout(deleteMe, 6000, x);
};
