let navMenu = document.getElementById('nav-menu');
let btnMenu = document.getElementById('btn-menu');

let submenu1 = navMenu.querySelectorAll('.submenu-1');
let submenu2 = navMenu.querySelectorAll('.submenu-2');  
let hugeMenu = navMenu.querySelector('.submenu-huge');
let allSpans = navMenu.querySelectorAll('span');


if(window.outerWidth < 992) {
    addSubMenuSmall('submenu-1-small','submenu-2-small','submenu-huge-small');
    addDNoneToMenu();
    addEventOnSpan();
}

btnMenu.onclick = function(e){
    navMenu.classList.toggle('active-small-menu');
};

let isDnone = false;

window.onresize = function(e){

    if(window.outerWidth > 992 && isDnone) {
        console.log('in remove onresize');
        removeDNoneFromMenu();
        toggleSubmenu('submenu-1-small','submenu-2-small','submenu-huge-small');
        clearEventOnSpan();
        isDnone = false;
        navMenu.classList.remove('active-small-menu');
    }

    if(window.outerWidth < 992 && !isDnone) {
        console.log('in add onresize');
        addDNoneToMenu();
        addEventOnSpan();
        toggleSubmenu('submenu-1-small','submenu-2-small','submenu-huge-small');
        isDnone = true;
    }
}

function toggleSubmenu(submenu1New, submenu2New, submenuHuge){


    for (let i = 0; i < submenu1.length; i++) {
       submenu1[i].classList.toggle('submenu-1');
       submenu1[i].classList.toggle(submenu1New);
    }  

    for (let i = 0; i < submenu2.length; i++) {
        submenu2[i].classList.toggle('submenu-2');
        submenu2[i].classList.toggle(submenu2New);
    } 

    hugeMenu.classList.toggle('submenu-huge');
    hugeMenu.classList.toggle(submenuHuge);

}

function addEventOnSpan(){

    for (let i = 0; i < allSpans.length; i++) {
        allSpans[i].onclick = function(){
            this.nextElementSibling.classList.toggle('d-none');
        }
    }
}
function clearEventOnSpan() {  
    for (let i = 0; i < allSpans.length; i++) {
        allSpans[i].onclick = null;
    }
}

function removeDNoneFromMenu() {

    for (let i = 0; i < submenu1.length; i++) {
        submenu1[i].classList.remove('d-none');
     }  
 
     for (let i = 0; i < submenu2.length; i++) {
         submenu2[i].classList.remove('d-none');
     } 
 
     hugeMenu.classList.remove('d-none');
}

function addDNoneToMenu() {
    console.log('in add');
    for (let i = 0; i < submenu1.length; i++) {
        submenu1[i].classList.add('d-none');
     }  
 
     for (let i = 0; i < submenu2.length; i++) {
         submenu2[i].classList.add('d-none');
     } 
 
     hugeMenu.classList.add('d-none');
}
function addSubMenuSmall(s1, s2, s3){
    
    for (let i = 0; i < submenu1.length; i++) {
        submenu1[i].classList.remove('submenu-1');
        submenu1[i].classList.add(s1);
     }  
 
     for (let i = 0; i < submenu2.length; i++) {
         submenu2[i].classList.remove('submenu-2');
         submenu2[i].classList.add(s2);
     } 
 
     hugeMenu.classList.remove('submenu-huge');
     hugeMenu.classList.add(s3);
     
}