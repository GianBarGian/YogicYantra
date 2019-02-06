const scrollTop = document.querySelector('.to-top');


scrollTop.classList.add('close');
window.addEventListener('scroll', () => {
    if (pageYOffset > document.documentElement.clientHeight) {
        scrollTop.classList.remove('close')
    } else {
        scrollTop.classList.add('close');
    }
})

//scrollTop.addEventListener('click', () => window.scrollTo(0, 0));

scrollTop.addEventListener('click', event => {
    event.preventDefault();
    TweenMax.to(window, 1, {scrollTo:{y:0}});
}) 

