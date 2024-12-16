function showMessage() {
    document.getElementById('message').style.opacity = 1;
    createFlowers();
}

function createFlowers() {
    const flowers = ['🌸', '🌺', '🌹', '🌷', '🌻'];
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(flower);
        setTimeout(() => {
            flower.style.opacity = 1;
            flower.style.transform = `translateY(${Math.random() * 100 - 50}px)`;
        }, 100 * i);
    }
}

function acceptProposal() {
    document.querySelector('.container').innerHTML = `
        <h1>Yay! 🎉</h1>
        <p>Finally I can sleep in peace.</p>
        <div class="gif-container">
            <img src="hello.gif" alt="Celebration GIF">
        </div>
    `;
    createFlowers();
}

function noBtn() {
    document.querySelector('.container').innerHTML = '<h1>😞</h1><p>It\'s OK. Koi baat nahi.</p>';
}
