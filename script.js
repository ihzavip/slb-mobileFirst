
// HAMBURGER MENU
var hamburger = document.querySelector('button.hamburger');
hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
    document.getElementById("myNav").style.width = "50%";
});

// Close Open Menu
// function openNav() {
//   document.getElementById("myNav").style.width = "50%";
// }

function closeNav() {

    document.getElementById("myNav").style.width = "0%";
}
