var prevScrollPos = window.pageYOffset;
var navbar = document.getElementById("category");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos < currentScrollPos) {
    // Scrolling down
    navbar.classList.add("hide-element")
  } else {
    // Scrolling up
    navbar.classList.remove("hide-element")
  }

  prevScrollPos = currentScrollPos;
};






