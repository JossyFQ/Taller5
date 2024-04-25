document.getElementById('clienteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;

  //muestra el mensaje del correo registrado

  var mensaje = "Nombre: " + nombre + "<br>Email: " + email + "<br>Teléfono: " + telefono;
  document.getElementById('mensaje').innerHTML = mensaje;
});
