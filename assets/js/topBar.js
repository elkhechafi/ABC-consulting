const topBar = document.querySelector('nav');

function topBarBackground() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50) {
        topBar.style.backgroundColor = '#0b1315a8';
    } else {
        topBar.style.backgroundColor = '';
      }
};

window.onscroll = function() {topBarBackground()};



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 