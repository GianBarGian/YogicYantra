const unorderedLists = document.querySelectorAll('header ul');
const icons = document.querySelectorAll('header span');
const header = document.querySelector('header')
const topHeader = document.querySelector('.top-header');
const navHeader = document.querySelector('nav');

let viewportWidth;

let setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

const mainList = document.createElement('div');
mainList.classList.add('main-list');
mainList.appendChild(unorderedLists[0]);
mainList.appendChild(unorderedLists[1]);
mainList.appendChild(unorderedLists[2]);

setViewportWidth();
if (viewportWidth < 1000) {
    header.appendChild(mainList);
} else {        
    topHeader.appendChild(unorderedLists[2]);
    navHeader.appendChild(unorderedLists[0]);
}

window.addEventListener('resize', () => {
    setViewportWidth();
    
    if (viewportWidth < 1000) {
        header.appendChild(mainList);
        
    } else {
        if (header.contains(mainList)) {
            header.removeChild(mainList);
        }        
        topHeader.appendChild(unorderedLists[2]);
        navHeader.appendChild(unorderedLists[0]);
    }
})

icons[2].addEventListener('click', () => mainList.classList.toggle('open'));