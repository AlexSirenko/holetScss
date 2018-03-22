var arrowUp = document.getElementById('ui-to-top');

arrowUp.onclick = function() {
    scrollAnimateTo(window.pageYOffset || document.documentElement.scrollTop, 10)
};

function scrollAnimateTo(scrollTop, time){ 
    var step = 10;  
    
    setTimeout(function scroll(){
        step +=2;

        if(scrollTop > 10) {
            scrollTop -= step;
            window.scrollTo(0, scrollTop);
            setTimeout(scroll, time);
        }

    }, time);
}