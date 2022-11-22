import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import filmsImage from './img/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg';

const title = document.querySelector('#titre');
title.innerHTML = "myMovies Where your dreams come true";

renderFilmsImage(filmsImage);
renderFilmsText(title);

function renderFilmsImage(filmUrl) {
    const image = new Image(); // or document.createElement('img');
    image.src = filmUrl;
    image.height = 50;
    const main = document.querySelector('main');
    main.appendChild(image);
}

function renderFilmsText(filmUrl) {
    const text = filmUrl; 
    const main = document.querySelector('main');
    main.appendChild(text);
}