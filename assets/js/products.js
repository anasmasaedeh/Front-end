// Get the edit popup element
const editPopup = document.getElementById("edit-popup");

// Hide the edit popup by default
editPopup.style.display = "none";

// Function to open the edit popup
function openEditPopup() {
  editPopup.style.display = "block";
}

// Function to close the edit popup
function closeEditPopup() {
  editPopup.style.display = "none";
}

// Get all edit buttons
const editButtons = document.querySelectorAll(".edit-button");

// Add event listeners to all edit buttons
editButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    openEditPopup();
  });
});

// Get the close button in the popup
const closeButton = document.querySelector(".close-button");

// Add an event listener to the close button
closeButton.addEventListener("click", function(event) {
  closeEditPopup();
});
