const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const destinatario = "gnprueba9@gmail.com";

    // Obtener los valores de los campos
    const username = document.getElementById('nombre').value;
    const  correo= document.getElementById('email').value;
    const area = document.getElementById('mensaje').value;

    const enlaceMailto = `mailto:${destinatario}?subject=Mensaje%20de%20${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje)}%0D%0A%0D%0A${encodeURIComponent(email)}`;
    window.location.href = enlaceMailto;
});

  
