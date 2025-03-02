function updateCalendar() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    const calendarElement = document.getElementById('calendar');
    calendarElement.textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

// Update the calendar immediately
updateCalendar();

// Update the calendar every minute (optional)
setInterval(updateCalendar, 60000);
   // go back button
  
