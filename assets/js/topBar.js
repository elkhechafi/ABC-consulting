const topBar = document.querySelector('nav');

function topBarBackground() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50) {
        topBar.style.backgroundColor = '#0b1315a8';
    } else {
        topBar.style.backgroundColor = '';
      }
};

window.onscroll = function() {topBarBackground()};