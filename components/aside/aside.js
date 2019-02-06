const scrollTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (pageYOffset > document.documentElement.clientHeight) {
        scrollTop.classList.add('open')
    } else {
        scrollTop.classList.remove('open');
    }
})

//scrollTop.addEventListener('click', () => window.scrollTo(0, 0));

scrollTop.addEventListener('click', event => {
    event.preventDefault();
    TweenMax.to(window, 1, {scrollTo:{y:0}});
}) 

