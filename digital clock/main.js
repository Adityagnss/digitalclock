// JavaScript logic for the digital clock
function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    var period = hours < 12 ? 'AM' : 'PM';

    document.querySelector('.time').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.querySelector('.date-time').innerHTML = `${dayNames[day]}, ${monthNames[month]} ${date}, ${year}`;
}

setInterval(updateClock, 1000);

updateClock(); // Initial call to set the clock when the page loads
