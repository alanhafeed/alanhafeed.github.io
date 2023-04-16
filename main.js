function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var amPm = hours >= 12 ? 'PM' : 'AM';  // Determine AM or PM
    hours = hours % 12;  // Convert to 12-hour format
    hours = hours ? hours : 12;  // Handle midnight
    var timeString = hours + ':' + minutes + ' ' + amPm;  // Add AM/PM to time
    document.querySelector('.time').innerHTML = timeString;
}

function playSound() {
    var sound = new Audio('sounds/startup.mp3');
    console.log("balls");
    sound.play();
}

// Call updateTime function every second
setInterval(updateTime, 1000);

const icon4 = document.querySelector('.icon4');
const icon3 = document.querySelector('#icon3');

let isVisable = true;

icon4.addEventListener('click', () => {
  if (isVisable) {
    icon3.style.display = 'block';
  } else {
    icon3.style.display = 'none';
  }
  isVisable = !isVisable; // Toggle the state
});



