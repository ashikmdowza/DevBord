
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons, the first h1 element, the second h1 element, and the paragraph for the time
    const buttons = document.querySelectorAll(".btn-click");
    const numberDisplay = document.getElementById("number-display");
    const increaseDisplay = document.getElementById("increase-display");
    const globalTimeContainer = document.getElementById("time-message"); // Select the paragraph element for time
    
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

            const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              });
              
              // Construct the message using the button's text and current time
              const message = `${this.textContent.trim()} You have completed the task: ${currentTime}`;
              
              // Create a new box (<div>) for this message
              const newBox = document.createElement("div");
              newBox.classList.add("time-box"); // Optional: add a class for styling
              
              // Create an <h2> element for the message
              const newH2 = document.createElement("h2");
              newH2.textContent = message;
              
              // Append the <h2> to the new box
              newBox.appendChild(newH2);
              
              // Append the new box to the global container (each box is separate)
              globalTimeContainer.appendChild(newBox);
        });
    });
});
// clear button
const clearButton = document.getElementById('clear-button');
    const contentParagraph = document.getElementById('content');

    // Add a click event listener to the button
    clearButton.addEventListener('click', function() {
      // Clear the content of the paragraph
      contentParagraph.textContent = ''; // or use innerHTML = ''
    });





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
     

