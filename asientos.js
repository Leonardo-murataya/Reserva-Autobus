let asientos = JSON.parse(localStorage.getItem('asientos')) || [];

function mostrarAsientosDisponibles() {
    let html = asientos.map(a => `
    <tr>
        <th class="TablaImagen"><img src="assets/asiento.png">Asiento ${a.numero}</th>
        <th>${a.reservadoPor}</th>
    </tr>
    `).join('');
    document.getElementById("CTabla").innerHTML = document.createElement("div").innerHTML = html;
}

// Mostrar los asientos disponibles al cargar la página
window.onload = mostrarAsientosDisponibles;

//redigir a la pagina principal
function Regresar() {
    localStorage.setItem('asientos', JSON.stringify(asientos));
    window.location.href = 'index.html';
}