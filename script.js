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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwoPICHwyR8CmgvEWp6UQF7tNOBetCCITNx3sfShoYYGt4CCdGHnK5WZkIBScP3_6-0/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Thank you for your message!")

        form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
})




