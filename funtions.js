// Contenido de app.js

document.addEventListener('DOMContentLoaded', function () {
    const animalCardsContainer = document.getElementById('animal-cards');

    // Fetch de imágenes de perros
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imgUrl => {
                createAnimalCard(imgUrl, 'Perro');
            });
        });

    // Fetch de imágenes de gatos
    fetch('https://api.thecatapi.com/v1/images/search?limit=3')
        .then(response => response.json())
        .then(data => {
            data.forEach(catData => {
                createAnimalCard(catData.url, 'Gato');
            });
        });

    function createAnimalCard(imgUrl, animalType) {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = imgUrl;
        image.alt = `Imagen de ${animalType}`;

        const title = document.createElement('h3');
        title.textContent = `${animalType} en Adopción`;

        card.appendChild(image);
        card.appendChild(title);
        animalCardsContainer.appendChild(card);
    }
});
