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

        // Después de procesar el formulario, lanza el efecto de confeti
        launchConfetti();
    });
});

/**add a confetti when the user click ondonate */
document.addEventListener('DOMContentLoaded', function () {
    // Capturamos el formulario de donaciones
    const donationForm = document.querySelector('#donation-form');

    donationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Procesa el formulario, por ejemplo, enviándolo al servidor

        // Después de procesar el formulario, lanza el efecto de confeti
        launchConfetti();
    });

    function launchConfetti() {
        // Configuración de la lluvia de confeti
        const confettiConfig = {
            spread: 180,
            startVelocity: 40,
            elementCount: 150,
            dragFriction: 0.12,
            duration: 3000,
            stagger: 3,
            width: "10px",
            height: "10px",
            colors: ["#ffcc00", "#ff6600", "#ff3333", "#990000", "#9933cc"]
        };

        // Lanza la lluvia de confeti
        canvasConfetti(confettiConfig);
    }
});
