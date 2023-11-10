const openBurger = document.getElementById("burger");
const open = document.getElementById("open");
let isOpen = false; // Initialize a variable to keep track of the open/close state.

openBurger.addEventListener("click", function () {
  if (isOpen) {
    open.style.display = "none"; // Close the div
  } else {
    open.style.display = "block"; // Open the div
  }
  isOpen = !isOpen; // Toggle the open/close state
});
