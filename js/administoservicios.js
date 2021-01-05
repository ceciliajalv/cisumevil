var carrito = []
var changuito = ""
var servicios = []
var adquirir = document.getElementById("adquirir")
var grilladeservicios = document.getElementById("grilladeservicios")

$('#adquirir').hide();
function ocultoServicios () {
    $('#NAserv').hide();
    $('#boxserv').hide();
    $('#adquirir').show();
    document.getElementById("servicios").style.height="130vh"
    cargoServicios(grilla)
}
function cargoServicios(grilla) {
    let filas = "<tr><td>No tenemos servicios disponibles en este momento, por favor intente nuevamente en otro momento.</td></tr>"
    if(SERVICIOS.length > 0) {
        filas = ""
        for (let i in SERVICIOS) {
            filas += "<tr>" +
                     "<td>" + SERVICIOS[i].servicio + "</td>" +
                     "<td>" + SERVICIOS[i].descripcion + "</td>" +
                     "<td>" + SERVICIOS[i].precio + "</td>" +
                     "</tr>"
        }
    }
    grilla.innerHTML = filas
}
document.getElementById(btnserv).onclick = cargoServicios(grilladeservicios)

function volverserv() {
    $('#NAserv').show();
    $('#boxserv').show();
    $('#adquirir').hide();
    document.getElementById("servicios").style.height="120vh"
}