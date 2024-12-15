// Detectar el scroll y ajustar el logo y el encabezado
window.onscroll = function() {
    var logo = document.getElementById('logo');
    var header = document.getElementById('page-header');

    if (window.scrollY > 50) { 
        if (logo) logo.classList.add('hidden');
        if (header) header.classList.add('shrink');
    } else {
        if (logo) logo.classList.remove('hidden');
        if (header) header.classList.remove('shrink');
    }
};

// Función para abrir un popup con un enlace
function popup(mylink, windowname) {
    if (!window.focus) return true;
    var href = (typeof(mylink) === 'string') ? mylink : mylink.href;
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes');
    return false;
}

// Mostrar y cerrar un popup al validar un formulario
document.addEventListener("DOMContentLoaded", function () {
    // Referencias a los elementos
    const submitButton = document.getElementById('submitBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupButton = document.getElementById('closePopup');

    // Función para validar el correo electrónico
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Función para validar el formulario y mostrar el popup
    submitButton.addEventListener('click', function () {
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('message').value.trim();

        // Validar si hay campos vacíos
        if (!nombre || !apellido || !correo || !mensaje) {
            alert('Por favor, completa todos los campos obligatorios.');
            return; // Detener ejecución si hay campos vacíos
        }

        // Validar formato del correo
        if (!isValidEmail(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return; // Detener ejecución si el correo no es válido
        }

        // Mostrar el popup
        popupOverlay.classList.remove('hidden');
        popupOverlay.classList.add('visible');
    });

    // Función para cerrar el popup
    closePopupButton.addEventListener('click', function () {
        popupOverlay.classList.remove('visible');
        popupOverlay.classList.add('hidden');
    });
});
