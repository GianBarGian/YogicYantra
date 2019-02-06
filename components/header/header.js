const unorderedLists = document.querySelectorAll('header ul');
const mainHeaderItems = unorderedLists[0];
const moreMenuItems = unorderedLists[1];
const topHeaderItems = unorderedLists[2];
const icons = document.querySelectorAll('header span');
const header = document.querySelector('header')
const topHeader = document.querySelector('.top-header');
const navHeader = document.querySelector('nav');
const moreAnchor = document.querySelector('.more')
const lens = document.querySelector('.lens');
const searchForm = document.querySelector('.search');
const searchClose = document.querySelector('.search span');

let viewportWidth;
let setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

const mainListCreation = () => {
    mainList = document.createElement('div');
    mainList.classList.add('main-list');
    mainList.classList.add('close');
    mainList.appendChild(mainHeaderItems);
    mainList.appendChild(moreMenuItems);
    mainList.appendChild(topHeaderItems);
    return mainList;
}
mainListCreation();
setViewportWidth();
searchForm.classList.add('close');
if (viewportWidth < 1000) {
    moreMenuItems.classList.remove('more-menu');
    moreMenuItems.classList.add('top-header-menu');
    header.appendChild(mainList);
} else {
    moreMenuItems.classList.add('more-menu');
    moreMenuItems.classList.add('close');
    moreMenuItems.classList.remove('top-header-menu');        
    topHeader.appendChild(topHeaderItems);
    navHeader.appendChild(mainHeaderItems);
    moreAnchor.appendChild(moreMenuItems);
    
}


window.addEventListener('resize', () => {
    setViewportWidth();    
    
    if (viewportWidth < 1000) {
        if (topHeader.contains(topHeaderItems)) {
            topHeader.removeChild(topHeaderItems);
            navHeader.removeChild(mainHeaderItems);
        }
        if (!header.contains(mainList)) {
           mainListCreation(); 
        }
        
        moreMenuItems.classList.remove('more-menu');
        moreMenuItems.classList.add('top-header-menu');
        moreMenuItems.classList.remove('close')
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
        moreMenuItems.classList.add('close');
    }
})

icons[2].addEventListener('click', () => mainList.classList.toggle('close'));
moreAnchor.addEventListener('mouseover', () => moreMenuItems.classList.remove('close'));
moreMenuItems.addEventListener('mouseover', () => moreMenuItems.classList.remove('close'));
moreAnchor.addEventListener('mouseout', () => moreMenuItems.classList.add('close'));
lens.addEventListener('click', () => searchForm.classList.remove('close'));
searchClose.addEventListener('click', () => searchForm.classList.add('close'));