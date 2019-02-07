const unorderedLists = document.querySelectorAll('header ul');
const mainHeaderItems = unorderedLists[0];
const moreMenuItems = unorderedLists[1];
const topHeaderItems = unorderedLists[2];
const header = document.querySelector('header')
const topHeader = document.querySelector('.top-header');
const navHeader = document.querySelector('nav');
const moreAnchor = document.querySelector('.more')
const lens = document.querySelector('.lens');
const hamburger = document.querySelector('.menu')
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
if (viewportWidth < 1200) {
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
    
    if (viewportWidth < 1200) {
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

hamburger.addEventListener('click', () => {
    if (mainList.classList.contains('close')) {
        mainList.classList.remove('close');
        TweenMax.to('.main-list', 0, {scaleY: 1, y: 0});
        TweenMax.from('.main-list', 1, {scaleY: 0, y: -190});
    } else {
        TweenMax.to('.main-list', 1, {scaleY: 0, y: -190});
        setTimeout(() => mainList.classList.add('close'), 1000) ;
    }
    
});
moreAnchor.addEventListener('mouseover', () => moreMenuItems.classList.remove('close'));
moreMenuItems.addEventListener('mouseover', () => moreMenuItems.classList.remove('close'));
moreAnchor.addEventListener('mouseout', () => moreMenuItems.classList.add('close'));
lens.addEventListener('click', () => {
    TweenMax.to('.search', 0, {y: 0, opacity: 1});

    TweenMax.to('header nav', 0.5, {y: 35, opacity: 0});
    setTimeout(() => navHeader.classList.add('close'), 500);
    TweenMax.from('.search', 0.5, {y: -35, opacity: 0});
    searchForm.classList.remove('close');

    //setTimeout(() => TweenMax.to('.search', 0, {y: 0, opacity: 1}), 501);
});
searchClose.addEventListener('click', () => {
    TweenMax.to('header nav', 0, {y: 0, opacity: 1});
    
    TweenMax.to('.search', 0.5, {y: 35, opacity: 0});
    setTimeout(() => searchForm.classList.add('close'), 500);
    TweenMax.from('header nav', 0.5, {y: -35, opacity: 0});
    navHeader.classList.remove('close');

    //setTimeout(() => TweenMax.to('header nav', 0, {y: 0, opacity: 1}), 501);
});