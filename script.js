    // Para que el usuario no pueda poner mas de 40 asientos
    let asientos;
if(!localStorage.getItem('asientos')){
    asientos = Array(40).fill().map((_, i) => ({ numero: i + 1, reservadoPor: "Disponible", libre: true }));
}else{
    asientos = JSON.parse(localStorage.getItem('asientos'));
}


    // Redirigir al usuario a la página de asientos disponibles
function mostrarAsientosDisponibles() {
    localStorage.setItem('asientos', JSON.stringify(asientos));
    window.location.href = 'AsientosDis.html';
}

    // Por si el asiento esta ocupado
function reservarAsiento() {
    let numero = document.getElementById('Nasientos').value;
    let nombre = document.getElementById('Nreservado').value;
    let asiento = asientos.find(a => a.numero == numero);
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre antes de reservar un asiento.');
    } else if (asiento.libre === true) {
        asiento.reservadoPor = nombre;
        asiento.libre = false;
        Guardar();
    } else {
        alert('El asiento ya está ocupado o el número de asiento es inválido. Por favor, selecciona otro asiento.');
    }
}

function Guardar() {
    // Implementar la lógica para modificar la reserva (pendiente...)
    localStorage.setItem('asientos', JSON.stringify(asientos));
}

function Modificar() {
    // Implementar la lógica para modificar la reserva (pendiente...)
    let numero = document.getElementById('Nasientos').value;
    let nombre = document.getElementById('Nreservado').value;
    let asiento = asientos.find(a => a.numero == numero);
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre antes de reservar un asiento.');
    } else if (asiento.reservadoPor != nombre) {
        asiento.reservadoPor = nombre;
        asiento.libre = false;
        Guardar();
    } else {
        alert('El asiento ya está ocupado o el número de asiento es inválido. Por favor, selecciona otro asiento.');
    }
}

function Eliminar() {
    // Implementar la lógica para eliminar la reserva (pendiente...)
    let numero = document.getElementById('Nasientos').value;
    let nombre = document.getElementById('Nreservado').value;
    let asiento = asientos.find(a => a.numero == numero);
    asiento.reservadoPor = "Disponible";
    asiento.libre = true;
    Guardar();   
    window.location.href = 'index.html';
}