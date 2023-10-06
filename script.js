const cards = document.querySelectorAll('.memoryCard');

function flipCard() {
    console.log('Card clicked'); 
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
