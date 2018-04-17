if (window.location.hostname == 'www.countdownlhs.ga') {
  alert("Drag me to your bookmarks bar. If I'm already there, use me on another site!");
} else {
  alert(cuteMessage());
  document.body.appendChild(document.createElement("script")).src="https://www.countdownlhs.ga/javascript/common.js";
  document.body.appendChild(document.createElement("script")).src="https://www.countdownlhs.ga/javascript/callie.js";
}


function cuteMessage() {
  return 'Hey, I\'ve got a question: Would you rather have a small amount of handwritten messages to show up whenever you use this, or a random one from a long list of generated ones?'
}
