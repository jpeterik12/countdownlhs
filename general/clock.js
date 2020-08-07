/*jshint maxerr: 1000 */
if (window.location.hostname == 'www.cdlhs.ga') {
  alert('Drag me to your bookmarks bar. If I\'m already there, use me on another site!');
} else {
  document.body.appendChild(document.createElement('script')).src =
    'https://www.cdlhs.ga/js/mobilebookmarklet.js';
  document.body.appendChild(document.createElement('script')).src =
    'https://www.cdlhs.ga/js/countdown.js';
}
