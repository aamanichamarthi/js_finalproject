// Function to handle mouseover event
function handleMouseOver(event) {
  event.target.style.opacity = '0.7';
}

// Function to handle mouseleave event
function handleMouseLeave(event) {
  event.target.style.opacity = '1';
}

// Function to handle focus event
function handleFocus(event) {
  console.log("Element focused:", event.target.alt);
  event.target.style.border = '2px solid blue';
}

function handleBlur(event) {
  console.log("Element blurred:", event.target.alt);
  event.target.style.border = '2px solid black';
}
function addTabFocus() {
  var images = document.querySelectorAll('#gallery img');
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
  }
}

document.addEventListener('DOMContentLoaded', addTabFocus); 
var images = document.querySelectorAll('#gallery img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', handleMouseOver);
  images[i].addEventListener('mouseleave', handleMouseLeave);
  images[i].addEventListener('focus', handleFocus); 
  images[i].addEventListener('blur', handleBlur);
}
