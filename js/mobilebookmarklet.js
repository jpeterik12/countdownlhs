/* global start */
//bookmarklet

function clockMove() {
  if (this.style.top == '0px') {
    if (this.style.right == '0px') {
      this.style.top = 'calc(100% - ' + this.offsetHeight + 'px)';
      this.onmouseover = null;
      setTimeout(
        function(diver) {
          diver.onmouseover = clockMove;
        },
        1000,
        this
      );
    } else {
      this.style.right = '0px';
      this.onmouseover = null;
      setTimeout(
        function(diver) {
          diver.onmouseover = clockMove;
        },
        1000,
        this
      );
    }
  } else {
    if (this.style.right == '0px') {
      this.style.right = 'calc(100% - ' + this.offsetWidth + 'px)';
      this.onmouseover = null;
      setTimeout(
        function(diver) {
          diver.onmouseover = clockMove;
        },
        1000,
        this
      );
    } else {
      this.style.top = '0px';
      this.onmouseover = null;
      setTimeout(
        function(diver) {
          diver.onmouseover = clockMove;
        },
        1000,
        this
      );
    }
  }
}

function createClock() {
  var deleter = document.getElementById('clock-div');
  if (deleter) deleter.parentNode.removeChild(deleter);

  var clockdiv = document.createElement('div');
  clockdiv.innerHTML =
    '<p style="z-index: inherit; font-family:monospace; padding: 0 0 0 0; font-size: 20px; border: 1px solid #000000; background-color: white;" id="clock">00:00</p>';
  clockdiv.style =
    'z-index: 2147483647; position: fixed; top: 0px; right: 0px; padding: 0 0 0 0; transition: all 1s ease-out;';
  clockdiv.id = 'clock-div';

  clockdiv.onmouseover = clockMove;
  clockdiv.onload = () => {
    start;
  };

  document.body.appendChild(clockdiv);
}

createClock();
