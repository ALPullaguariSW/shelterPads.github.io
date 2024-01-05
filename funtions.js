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

document.addEventListener('DOMContentLoaded', function () {
    // Capturamos el formulario
    const formularioContacto = document.querySelector('#contacto form');

    formularioContacto.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capturamos los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Realizamos la validación básica (puedes agregar más validaciones según tus necesidades)
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Si todo está bien, puedes enviar los datos o realizar otras acciones
        alert(`Mensaje enviado:\nNombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`);
        // También puedes enviar los datos a través de AJAX o cualquier otra forma de comunicación

        // Limpia el formulario después de enviar
        formularioContacto.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const stripe = Stripe('pk_test_51OVFwwFwYyQoxkEMnReOCp6l0tU5U3JEE6uoJjXaetpEqDHE3pmknwniw2akrvOgl5AtsLIK4f1ULXh4ZRrWXkMB00wbQNbrxG');
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    
    cardElement.mount('#card-element');
    
    const form = document.getElementById('donation-form');
    const cardErrors = document.getElementById('card-errors');
    
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const { token, error } = await stripe.createToken(cardElement);
    
        if (error) {
            cardErrors.textContent = error.message;
        } else {
            // Aquí puedes enviar el token de pago (token.id) al servidor para procesar la donación
            alert(`Donación exitosa. Token: ${token.id}`);
            
            // También puedes realizar otras acciones como enviar el token al servidor mediante AJAX
            // y mostrar un mensaje de éxito o redirigir a una página de confirmación.
        }
    });
});