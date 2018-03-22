var menuArrowMin = false;
var header = document.getElementById('header-nav');
var arrow = document.getElementById('ui-to-top');

document.onscroll = function(e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled > 1050 && !menuArrowMin) {
        menuToggle();
        arrowToggle();
        menuArrowMin = true;
    }
    if(scrolled < 1050 && menuArrowMin) {
        menuToggle();
        arrowToggle();
        menuArrowMin = false;
    }
};

function menuToggle() {
    header.classList.toggle('header-top');
}

function arrowToggle() {
    arrow.classList.toggle('ui-to-top-active');
}