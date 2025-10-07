document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('reservaForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    if (!nombre || !destino || !fecha) {
      window.alert('Por favor rellena todos los campos antes de enviar.');
      return;
    }
    window.alert('Reserva enviada:\nNombre: ' + nombre + '\nDestino: ' + destino + '\nFecha: ' + fecha + '\n\nGracias por confiar en Agencia de Viajes.');
    form.reset();
  });
});
