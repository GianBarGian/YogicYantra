const unorderedLists = document.querySelectorAll('header ul');
const mainHeaderItems = unorderedLists[0];
const moreMenuItems = unorderedLists[1];
const topHeaderItems = unorderedLists[2];
const icons = document.querySelectorAll('header span');
const header = document.querySelector('header')
const topHeader = document.querySelector('.top-header');
const navHeader = document.querySelector('nav');

let viewportWidth;
let setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}


const mainListCreation = () => {
    mainList = document.createElement('div');
    mainList.classList.add('main-list');
    mainList.appendChild(mainHeaderItems);
    mainList.appendChild(moreMenuItems);
    mainList.appendChild(topHeaderItems);
    
}

setViewportWidth();
if (viewportWidth < 1000) {
    mainListCreation();
    header.appendChild(mainList);
} else {        
    topHeader.appendChild(topHeaderItems);
    navHeader.appendChild(mainHeaderItems);
}

window.addEventListener('resize', () => {
    setViewportWidth();
    
    if (viewportWidth < 1000) {
        if (topHeader.contains(topHeaderItems)) {
            topHeader.removeChild(topHeaderItems);
            navHeader.removeChild(mainHeaderItems);
        }
        mainListCreation();
        header.appendChild(mainList);
        
    } else {
        if (header.contains(mainList)) {
            header.removeChild(mainList);
        }        
        topHeader.appendChild(topHeaderItems);
        navHeader.appendChild(mainHeaderItems);
    }
})

icons[2].addEventListener('click', () => mainList.classList.toggle('open'));