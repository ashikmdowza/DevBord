
document.addEventListener("DOMContentLoaded", function () {
 
    const buttons = document.querySelectorAll(".btn-click");
    const numberDisplay = document.getElementById("number-display");
    const increaseDisplay = document.getElementById("increase-display");
    const activityLog = document.getElementById("activity-log");
    

    let number = 6;
    let increaseNumber = 23;
    

    numberDisplay.textContent = number;
    increaseDisplay.textContent = increaseNumber;


    buttons.forEach(button => {
        button.addEventListener("click", function () {
            
            alert("Band Updated Successfully");
            this.disabled = true;

      
            if (number > 0) {
                number--;
                numberDisplay.textContent = number;
            }

        
            increaseNumber++;
            increaseDisplay.textContent = increaseNumber;

            // Get the task name and time
            let taskName = button.parentElement.parentElement.querySelector("h2").innerText;
            let currentTime = new Date().toLocaleTimeString();

            // Create log entry
            let logEntry = document.createElement("p");
            logEntry.innerText = `${taskName} completed at - ${currentTime}`;
            logEntry.classList.add("text-sm","text-black", "mt-1","gap-2");

            // Append to Activity Log
            activityLog.appendChild(logEntry);

            if (number == 0) {
               alert("No task left, congratulations");
            }


let clearLogButton = document.getElementById("clear-button");
clearLogButton.addEventListener("click", function (event) {
    event.preventDefault();
    activityLog.innerHTML=" ";
});



      
        });
    });
});
// clear button


    // random color changing
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const cButton = document.getElementById('colorButton');

cButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});



// discover-button
const DisButton = document.getElementById('button-newPage');


            DisButton.addEventListener('click', function() {

            window.location.href = "main.html";

        });
     

