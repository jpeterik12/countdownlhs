function ad() {
   const x = document.createElement('img');
  x.src = '/images/1EEEB279-F530-42B8-8FC5-6DF3DEFE9ECB.jpeg';
  x.style.height = '90vh';
 x.style.width = '100vw';
 x.style.objectFit = 'contain';
 x.style.zIndex = '2147483647';
x.style.display = 'block';
  x.onload = yeet;
  x.style.position = 'absolute';
 x.style.top = 0;
  document.body.appendChild(x);
  function deleteMe(element) {
     element.parentNode.removeChild(element);
   }

   function yeet() { 
  setTimeout(deleteMe, 6000, x);
  }
}
