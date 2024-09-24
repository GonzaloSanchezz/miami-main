const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestjson = await fetch(`../languages/${language}.json`);
    const texts = await requestjson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
})

document.getElementById('cantidadPersonas').addEventListener('change', calcularTotal);

document.getElementById('buttonCotizacion').addEventListener("click", function(){
    var buttonCots = document.getElementById('divButtonContinuar');
    if (buttonCots.style.display === 'none' || buttonCots.style.display === '') {
        buttonCots.style.display = 'flex';
    }
});

function calcularTotal() {
    const primeraUbicacion = parseInt(document.getElementById('primera-ubicacion').value);
    const segundaUbicacion = parseInt(document.getElementById('segunda-ubicacion').value);
    const cantidadPersonas = parseInt(document.getElementById('cantidadPersonas').value);
    const total = (primeraUbicacion + segundaUbicacion) * cantidadPersonas ;
    document.getElementById('resultadoCotizacion').innerText = 'Total: $ ' + total;
}

let phoneNumber = +13053361521;




document.getElementById('buttonContinuar').addEventListener("click", function(){
    const primeraUbicacion = parseInt(document.getElementById('primera-ubicacion').value);
    const segundaUbicacion = parseInt(document.getElementById('segunda-ubicacion').value);
    const cantidadPersonas = parseInt(document.getElementById('cantidadPersonas').value);
    hora = document.getElementById('horaSalida').value;
    tipoViaje = document.getElementById('tipoViaje').options[document.getElementById('tipoViaje').selectedIndex].text;
    startLocation = document.getElementById('primera-ubicacion').options[document.getElementById('primera-ubicacion').selectedIndex].text;
    endLocation = document.getElementById('segunda-ubicacion').options[document.getElementById('segunda-ubicacion').selectedIndex].text;
    const total = (primeraUbicacion + segundaUbicacion) * cantidadPersonas ;
    document.getElementById('resultadoCotizacion').innerText = 'Total: $ ' + total;
    let message = 
    `Cotización de mi viaje:

Salida desde: ${startLocation}
Llegada a: ${endLocation}
Cantidad de personas: ${cantidadPersonas}
Tipo de viaje: ${tipoViaje}
Hora de salida: ${hora}
Total = $${total}`;
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
})