document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces <a> que tienen un href que comienza con #
    var links = document.querySelectorAll('a[href^="#"]');

    // Iterar sobre cada enlace
    links.forEach(function(link) {
        // Agregar un evento de clic a cada enlace
        link.addEventListener("click", function(event) {
            // Prevenir el comportamiento predeterminado del enlace (evitar que la página se desplace bruscamente)
            event.preventDefault();

            // Obtener el destino del enlace (el elemento al que se dirige)
            var targetId = this.getAttribute("href").substring(1); // Eliminar el "#" del href
            var targetElement = document.getElementById(targetId);

            // Verificar si el elemento de destino existe
            if (targetElement) {
                // Hacer el desplazamiento suave hasta el elemento de destino
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
