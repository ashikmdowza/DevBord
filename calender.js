function updateDateTime() {
    const now = new Date();
    const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);  

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    document.getElementById('datetime').textContent = `${dayName}, ${monthName} ${date}, ${year} - ${timeString}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
