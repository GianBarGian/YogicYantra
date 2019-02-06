class CardAnimation {
    
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
        
        this.card.addEventListener('mouseover', () => {
            this.cover.classList.add('open');
            
        });
        this.card.addEventListener('mouseout', () => this.cover.classList.remove('open'))
    }

}


const cardsBestSelling = document.querySelectorAll('.best-selling .card figure');

cardsBestSelling.forEach(card => new CardAnimation(card));



