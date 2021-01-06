 function opcion_artistas() {
    var artistas = ["Seleccione el artista de su interés", "Cuore di Belladona", "Ractzon", "Dawn to midday"];
    var selectArtist = document.getElementById('opcion_artistas');
    
    for(var i=0; i < artistas.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = artistas[i];
        selectArtist.appendChild(option);
    }
}
opcion_artistas();

function opcion_venue() {
    var zonas = ["Seleccione la zona donde va a ser el evento", "AMBA", "Buenos Aires (interior), Córdoba o Santa Fé", "Resto de Argentina", "Países limítrofes", "Resto de Sudamérica", "Centroamérica, norteamérica y Caribe", "Europa", "Resto del mundo"];
    var selectVenue = document.getElementById('opcion_venue');
    
    for(var i=0; i < zonas.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = zonas[i];
        selectVenue.appendChild(option);
    }
}
opcion_venue();

function opcion_tipo() {
    var tipo = ["Seleccione el tipo de evento", "Evento privado (fiestas, actos corporativos, etc)", "Evento pago (con venta de entradas)", "Evento público (de entrada gratuita o benéfico)"];
    var selectTipo = document.getElementById('opcion_tipo');
    
    for(var i=0; i < tipo.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = tipo[i];
        selectTipo.appendChild(option);
    }
}
opcion_tipo();
$(".blur").hide();
$(".blur").fadeIn("slow");