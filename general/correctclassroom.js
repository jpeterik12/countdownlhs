if (window.location.hostname == 'www.countdownlhs.ga') {
  alert('Drag me to your bookmarks bar. If I\'m already there, use me on another site!');
} else {
  alert(cuteMessage());
  document.body.appendChild(document.createElement('script')).src = 'https://www.countdownlhs.ga/javascript/common.js';
  document.body.appendChild(document.createElement('script')).src = 'https://www.countdownlhs.ga/javascript/callie.js';
}

function cuteMessage() {
  var template = 'Hey Callie! Have a _ day! __.';

  var messages = [
    'amazing',
    'awesome',
    'blithesome',
    'excellent',
    'fabulous',
    'fantastic',
    'favorable',
    'great',
    'incredible',
    'outstanding',
    'perfect',
    'smart',
    'remarkable',
    'spectacular',
    'splendid',
    'stellar',
    'stupendous',
    'super',
    'ultimate',
    'unbelievable',
    'wondrous',
  ];

  var position = template.indexOf('_');

  template = [template.slice(0, position), messages[Math.floor(Math.random() * messages.length)], template.slice(position + 1)].join('');

  messages = ['Stay happy', 'Stay cute', 'Enjoy yourself', 'Love yourself', 'Stay hydrated', 'Think positive', 'Stay positive', 'Don\'t die'];

  position = template.indexOf('_');

  template = [template.slice(0, position), messages[Math.floor(Math.random() * messages.length)], template.slice(position + 1)].join('');

  messages = [' and I\'m thinking of you', '. xoxox', ' and have fun', ' and don\'t let the world control you', ' and be mindful'];

  position = template.indexOf('_');

  template = [template.slice(0, position), messages[Math.floor(Math.random() * messages.length)], template.slice(position + 1)].join('');

  return template;
}
