var particles = document.createElement('div');
particles.setAttribute('id', 'main-canvas');

document.getElementById('home').appendChild(particles);

particlesJS.load('main-canvas', 'public/particles.json');


