 function opcion_artistas() {
    var artistas = ["Seleccione el artista de su interés", "Cuore di belladona", "Ractzon", "Dawn to midday"];
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

$( document ).ready(function() 
{
   alert( "Gracias por su visita! Le informamos que debido a la pandemia del COVID19 no estamos realizando contrataciones para el primer trimestre del 2021. Le pedimos disculpas por las molestias. Ante cualquier duda puede llenar nuestro formulario de contacto o enviarnos un e-mail a info@cisumevil.com.ar" );
});
