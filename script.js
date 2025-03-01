document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons, the first h1 element, the second h1 element, and the paragraph for the time
    const buttons = document.querySelectorAll(".btn");
    const numberDisplay = document.getElementById("number-display");
    const increaseDisplay = document.getElementById("increase-display");
    const timeMessage = document.getElementById("time-message"); // Select the paragraph element for time
    
    // Initialize numbers
    let number = 5;
    let increaseNumber = 23;
    
    // Set initial text content for the h1 elements
    numberDisplay.textContent = number;
    increaseDisplay.textContent = increaseNumber;

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Disable the clicked button
            alert("Band Updated Successfully");
            this.disabled = true;

            // Decrease the number and update the display
            if (number > 0) {
                number--;
                numberDisplay.textContent = number;
            }

            // Always increase the increaseNumber and update the display
            increaseNumber++;
            increaseDisplay.textContent = increaseNumber;

            // Get the current time
            const currentTime = new Date().toLocaleString(); // Current time as a string
            
            // Update the paragraph with the current time
            timeMessage.textContent = `Last updated at: ${currentTime}`;
        });
    });
});
