// Crear una instancia del mapa
var mapa = L.map('mapa').setView([6.28027755, -75.5828041258888], 10);

// Añadir una capa de mosaicos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(mapa);

// Crear un marcador y agregarlo al mapa
var marker = L.marker([6.28027755, -75.5828041258888]).addTo(mapa);

// Añadir un evento de clic al marcador
marker.on('click', function() {
  alert('Sede principal del TdeA.');
});

// Crear otro marcador y agregarlo al mapa
var marker2 = L.marker([	6.16890036269, -75.5742507687]).addTo(mapa);

// Añadir un evento de clic al segundo marcador
marker2.on('click', function() {
  alert('barrio inmaculada,Envigado');
});
