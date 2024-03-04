<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "gnprueba9@gmail.com";
  $asunto = "Nuevo mensaje de contacto";

  $contenido = "Nombre: $nombre\n";
  $contenido .= "Correo electrónico: $email\n\n";
  $contenido .= "Mensaje:\n$mensaje";

  mail($destinatario, $asunto, $contenido);

  header("Location: form.html");
}
?>
