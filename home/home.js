class BestSellingCardAnimation {
    
    constructor(card) {
        const cover = document.createElement('div');
        const heart = document.createElement('span');
        cover.classList.add('cover');
        heart.innerHTML = '&#xe089;';
        heart.classList.add('heart');
        this.card = card;
        this.cover = cover;
        this.heart = heart;
        

        this.cover.appendChild(this.heart);
        this.card.appendChild(this.cover);
        this.cover.classList.add('close');
        
        this.card.addEventListener('mouseenter', () => TweenMax.from(".heart", 0.8, { opacity: 0, y: 20}));
        this.card.addEventListener('mouseover', () => this.cover.classList.remove('close'));
        this.card.addEventListener('mouseout', () => this.cover.classList.add('close'));
    }

}

class WhoAreUCardAnimation {
    constructor(card) {
        this.card = card;
        this.title = this.card.querySelector('h3');
        
        this.title.classList.add('close');  
        this.card.addEventListener('mouseover', () => this.title.classList.remove('close'));
        this.card.addEventListener('mouseout', () => this.title.classList.add('close'));


    }
}


const cardsBestSelling = document.querySelectorAll('.best-selling .card figure');
const mainVideo = document.querySelector('.main-video');
const whoAreUCards = document.querySelectorAll('.who-are-you .card');


cardsBestSelling.forEach(card => new BestSellingCardAnimation(card));
whoAreUCards.forEach(card => new WhoAreUCardAnimation(card));


mainVideo.addEventListener('mouseenter', () => TweenMax.to('.main-video', 1, {scaleY: 1.1}));
mainVideo.addEventListener('mouseleave', () => TweenMax.to('.main-video', 1, {scaleY: 1}));

