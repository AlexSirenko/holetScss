let divs = document.querySelectorAll('.diningAndBar-menu__body>div');

let links = document.querySelectorAll('.food-menu-list a');

let lastFocused = divs[0];

for(let i = 0; i < links.length; i++){
    links[i].onclick = function(e){

        if(lastFocused.id === e.target.dataset.divId)
            return;
            
        showDiv(i);
        lastFocused = divs[i];
    }
}

function showDiv(index){
    lastFocused.classList.add('hidden');
    divs[index].classList.remove('hidden');
}