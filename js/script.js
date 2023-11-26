const openBurger = document.getElementById("burger");
const open = document.getElementById("open");
let isOpen = false; // Initialize a variable to keep track of the open/close state.
const accauntOpen = document.querySelector(".wrapper-open-accaunt");
const vector = document.querySelector(".wrapper-pionter");
let newOpen = false;
openBurger.addEventListener("click", function () {
  if (isOpen) {
    open.style.display = "none"; // Close the div
  } else {
    open.style.display = "block"; // Open the div
  }
  isOpen = !isOpen; // Toggle the open/close state
});
vector.addEventListener('click',function(){
  if(newOpen){
    accauntOpen.style.display = 'none'
  }else{
    accauntOpen.style.display = 'block'
  }
  newOpen = !newOpen
})