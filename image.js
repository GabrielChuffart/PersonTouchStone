const gameTiles = document.querySelectorAll('.game-tile');

gameTiles.forEach(tile => {
    tile.addEventListener('mouseover', function() {
        const image = this.querySelector('.game-image');
        const src = image.getAttribute('src');
        if (src === 'img/aim-trainer.png') {
            image.setAttribute('src', 'img/aim-trainer-hover.png');
        }
        else if (src === 'img/jitter.png') {
            image.setAttribute('src', 'img/jitter-hover.png');
        }
        else if (src === 'img/sequence-memory.png') {
            image.setAttribute('src', 'img/sequence-memory-hover.png');
        }
    });
    tile.addEventListener('mouseout', function() {
        const image = this.querySelector('.game-image');
        const src = image.getAttribute('src');
        if (src === 'img/aim-trainer-hover.png') {
            image.setAttribute('src', 'img/aim-trainer.png');
        }
        else if (src === 'img/jitter-hover.png') {
            image.setAttribute('src', 'img/jitter.png');
        }
        else if (src === 'img/sequence-memory-hover.png') {
            image.setAttribute('src', 'img/sequence-memory.png');
        }
    });
});