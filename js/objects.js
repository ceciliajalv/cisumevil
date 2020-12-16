

var amba = 1
var alrededores = 1.5
var arg = 1.8
var limit = 1
var sa = 1.5
var na = 2
var eu = 2.5
var rm = 3

document.getElementById("opcion_artistas").onchange = obtenerArt;
function obtenerArt(vart){
    var art = document.getElementById("opcion_artistas").value;
    obtenerArt.vart = art
    $("resTarifa").remove(); 

}
document.getElementById("opcion_venue").onchange = obtenerVen;
function obtenerVen(vven) {
    var ven = document.getElementById("opcion_venue").value;
    obtenerVen.vven = ven
}
document.getElementById("QShows").onchange = obtenerShow;
function obtenerShow(vsh) {
    var show = document.getElementById("QShows").value;
    obtenerShow.vsh = show
}


document.getElementById("enviarCont").onclick = tarifa;

function tarifa() {
    $("#loading").remove(); 
    $("#contrataciones").append("<div id='loading'><img src='./img/loading-02.gif'></div>");
    $("#resTarifa").remove(); 
    debugger
    setTimeout(()=>{
    $("#loading").remove(); 
    if (obtenerArt.vart == "Cuore di belladona")    
    switch (obtenerVen.vven) {
        case "AMBA":
             $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * amba* obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Buenos Aires (interior), Córdoba o Santa Fé":
            $("#contrataciones").append("<h3 id='resTarifa'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * alrededores * obtenerShow.vsh) + "ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");          
            break
        case  "Resto de Argentina":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * arg * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Países limítrofes":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * limit * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Sudamérica":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * sa * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Centroamérica, norteamérica y Caribe":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * na * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Europa":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * eu * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Resto del mundo":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * rm * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        default:
            alert("No seleccionó ninguna zona")
    }
    else if (obtenerArt.vart  == "Ractzon")
    switch (obtenerVen.vven) {
        case "AMBA":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * amba * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Buenos Aires (interior), Córdoba o Santa Fé":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * alrededores * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Argentina":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * arg * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Países limítrofes":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * limit * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Sudamérica":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * sa * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Centroamérica, norteamérica y Caribe":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * na * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Europa":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + ( jsonRAC["cachetUsd"] * eu * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Resto del mundo":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * rm * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        default:
            alert("No seleccionó ninguna zona")
    }
    else if (obtenerArt.vart == "Dawn to midday")
    switch (obtenerVen.vven) {
        case "AMBA":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * amba * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Buenos Aires (interior), Córdoba o Santa Fé":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * alrededores * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Argentina":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * arg * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Países limítrofes":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * limit * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case  "Resto de Sudamérica":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * sa * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Centroamérica, norteamérica y Caribe":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * na * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Europa":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * eu * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
            break
        case "Resto del mundo":
            $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * rm * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
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
