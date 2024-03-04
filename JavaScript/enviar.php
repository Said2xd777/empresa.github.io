<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "correo_destino@example.com";
  $asunto = "Nuevo mensaje de contacto";

  $contenido = "Nombre: $nombre\n";
  $contenido .= "Correo electrónico: $email\n\n";
  $contenido .= "Mensaje:\n$mensaje";

  mail($destinatario, $asunto, $contenido);

  // Puedes redirigir al usuario a una página de agradecimiento o mostrar un mensaje de éxito aquí
}
?>
