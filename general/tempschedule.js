var schedule = document.createElement('object');
schedule.type = "text/html";
schedule.data = "https://www.countdownlhs.ga/html/schedule.html";
schedule.height = '426px';
schedule.width = '657px';
schedule.style.position = 'fixed';
schedule.style.top = 'calc(50% - 213px)';
schedule.style.left = 'calc(50% - 328px)';
schedule.style.zIndex = '2147483647';
document.body.appendChild(schedule);

function deleteMe(element) {
  element.parentNode.removeChild(element);
}

setTimeout(deleteMe, 6000, schedule);
