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

// Call updateTime function every second
setInterval(updateTime, 1000);
