

var amba = 1
var alrededores = 1.5
var arg = 1.8
var limit = 1
var sa = 1.5
var na = 2
var eu = 2.5
var rm = 3
var idArtista = []
var idTipo = []
var idZona = []
var idQ = []
var idTransporte = []
var tipoEvento = []
var descuento = []
var traslado = []
var shows = document.getElementById("QShows").value;
var tipos = document.getElementById("opcion_tipo").value;

document.getElementById("opcion_tipo").onchange = obtenerTipo;
function obtenerTipo(vtipo){
    var tipo = document.getElementById("opcion_tipo").value;
    obtenerTipo.vtipo = tipo
    tipos = obtenerTipo.vtipo 
    $("resTarifa").remove(); 
    switch (obtenerTipo.vtipo) {
        case "Evento privado (fiestas, actos corporativos, etc)":
            tipoEvento = 1.2;
            break
        case "Evento pago (con venta de entradas)":
            tipoEvento = 1;
            break
        case "Evento público (de entrada gratuita o benéfico)":
            tipoEvento = 0.8;
            break
        case "Seleccione el tipo de evento":
            tipoEvento = 1;
            break
    }
    switch (shows){
    case "1":
    switch (obtenerTipo.vtipo) {
        case "Evento privado (fiestas, actos corporativos, etc)":
            idTipo = "evento privado";
            break
        case "Evento pago (con venta de entradas)":
            idTipo = "evento pago";
            break
        case "Evento público (de entrada gratuita o benéfico)":
            idTipo = "evento público";
            break
        case "Seleccione el tipo de evento":
            idTipo = "evento";
            break
        default:
            idTipo = "evento";
            break
    }
    }
    default {
    switch (obtenerTipo.vtipo) {
        case "Evento privado (fiestas, actos corporativos, etc)":
            idTipo = "eventos privados";
            break
        case "Evento pago (con venta de entradas)":
            idTipo = "eventos pagos";
            break
        case "Evento público (de entrada gratuita o benéfico)":
            idTipo = "eventos públicos";
            break
        case "Seleccione el tipo de evento":
            idTipo = "eventos";
            break
        default:
            idTipo = "eventos";
            break
    }
    }
}
document.getElementById("opcion_artistas").onchange = obtenerArt;
function obtenerArt(vart){
    var art = document.getElementById("opcion_artistas").value;
    obtenerArt.vart = art
    $("resTarifa").remove(); 
    idArtista = obtenerArt.vart
}
document.getElementById("opcion_venue").onchange = obtenerVen;
function obtenerVen(vven) {
    var ven = document.getElementById("opcion_venue").value;
    obtenerVen.vven = ven
}

document.getElementById("QShows").onchange = obtenerShow;
function obtenerShow(vsh) {
    var show = document.getElementById("QShows").value;
    debugger
    obtenerShow.vsh = show
    shows = obtenerShow.vsh
    switch (obtenerShow.vsh) {
         case "1":
             descuento = 1
             break
         case "2":
             descuento = 0.9;
             break
         case "3":
             descuento = 0.85;
             break
         case "4":
             descuento = 0.8;
             break
         case "5":
             descuento = 0.75;
             break
         case "6":
             descuento = 0.7;
             break
        case "7" :
            descuento = 0.65;
            break
        default:
             descuento = 0.6;
             break
    }
}


document.getElementById("enviarCont").onclick = tarifa;

function tarifa() {
    $("#loading").remove(); 
    $("#contrataciones").append("<div id='loading'><img src='./img/loading-02.gif'></div>");
    $("#resTarifa").remove(); 
    debugger
    setTimeout(()=>{
    $("#loading").remove(); 
    if (tipos == "Seleccione el tipo de evento")
        alert("Seleccione tipo de show")
    else
    if (shows == "")
        alert("Coloque la cantidad de shows")
    else 
    if (obtenerArt.vart == "Cuore di Belladona")    
    switch (obtenerVen.vven) {
        case "AMBA":
             $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6' class='col-md-6'>La tarifa de " + idArtista + " para " + shows + " " + idTipo + " para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * amba* tipoEvento* obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Buenos Aires (interior), Córdoba o Santa Fé":
            $("#contrataciones").append("<h3 id='resTarifa'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * alrededores *  tipoEvento * obtenerShow.vsh * descuento) + "ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");          
            break
        case  "Resto de Argentina":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * arg *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Países limítrofes":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * limit *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Sudamérica":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * sa *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Centroamérica, norteamérica y Caribe":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * na *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Europa":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * eu *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Resto del mundo":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * rm *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        default:
            alert("No seleccionó ninguna zona")
    }
    else if (obtenerArt.vart  == "Ractzon")
    switch (obtenerVen.vven) {
        case "AMBA":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * amba *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Buenos Aires (interior), Córdoba o Santa Fé":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * alrededores *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Argentina":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * arg *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Países limítrofes":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * limit *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Sudamérica":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * sa *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Centroamérica, norteamérica y Caribe":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * na *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Europa":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + ( jsonRAC["cachetUsd"] * eu *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Resto del mundo":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * rm *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        default:
            alert("No seleccionó ninguna zona")
    }
    else if (obtenerArt.vart == "Dawn to midday")
    switch (obtenerVen.vven) {
        case "AMBA":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * amba *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Buenos Aires (interior), Córdoba o Santa Fé":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * alrededores *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Argentina":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * arg *  tipoEvento * obtenerShow.vsh * descuento) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Países limítrofes":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * limit *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Sudamérica":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * sa *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Centroamérica, norteamérica y Caribe":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * na *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Europa":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * eu *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Resto del mundo":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * rm *  tipoEvento * obtenerShow.vsh * descuento) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        default:
            alert("No seleccionó ninguna zona")
    }
    else alert("No se seleccionó ningún artista")
    },2500)

}


$(document.getElementById("QShows")).on('keypress',function(e) {
    if(e.which == 44) { 
        alert('Este campo no permite comas');
    }
});
