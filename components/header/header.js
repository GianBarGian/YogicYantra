const unorderedLists = document.querySelectorAll('header ul');
const mainHeaderItems = unorderedLists[0];
const moreMenuItems = unorderedLists[1];
const topHeaderItems = unorderedLists[2];
const icons = document.querySelectorAll('header span');
const header = document.querySelector('header')
const topHeader = document.querySelector('.top-header');
const navHeader = document.querySelector('nav');
const moreAnchor = document.querySelector('.more')

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
    return mainList;
}
mainListCreation();
setViewportWidth();
if (viewportWidth < 1000) {
    header.appendChild(mainList);
    moreMenuItems.classList.remove('more-menu');
    moreMenuItems.classList.add('top-header-menu');
} else {        
    topHeader.appendChild(topHeaderItems);
    navHeader.appendChild(mainHeaderItems);
    moreAnchor.appendChild(moreMenuItems);
    moreMenuItems.classList.add('more-menu');
    moreMenuItems.classList.remove('top-header-menu');
}

window.addEventListener('resize', () => {
    setViewportWidth();
    
    if (viewportWidth < 1000) {
        if (topHeader.contains(topHeaderItems)) {
            topHeader.removeChild(topHeaderItems);
            navHeader.removeChild(mainHeaderItems);
        }
        mainListCreation();
        moreMenuItems.classList.remove('more-menu');
        moreMenuItems.classList.add('top-header-menu');
        header.appendChild(mainList);
        
    } else {
        
        if (header.contains(mainList)) {
            header.removeChild(mainList);
        }        
        topHeader.appendChild(topHeaderItems);
        navHeader.appendChild(mainHeaderItems);
        moreAnchor.appendChild(moreMenuItems);
        moreMenuItems.classList.add('more-menu');
        moreMenuItems.classList.remove('top-header-menu');
    }
})
icons[2].addEventListener('click', () => mainList.classList.toggle('open'));
moreAnchor.addEventListener('mouseover', () => moreMenuItems.classList.add('open'));
moreMenuItems.addEventListener('mouseover', () => moreMenuItems.classList.add('open'));
moreAnchor.addEventListener('mouseout', () => moreMenuItems.classList.remove('open'));