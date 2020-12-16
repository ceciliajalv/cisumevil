var carrito = []
var changuito = ""
var adquirir = document.getElementById("adquirir")
var grilladeservicios = document.getElementById("grilladeservicios")
var carritolista = document.getElementById("carritolista")
var checkout = document.getElementById("checkout")
var totales = document.getElementById ("totales")

function cargoServicios(grilla) {
    let filas = "<tr><td>No tenemos servicios disponibles en este momento, por favor intente nuevamente en otro momento.</td></tr>"
    if(SERVICIOS.length > 0) {
        filas = ""
        for (let i in SERVICIOS) {
            filas += "<tr>" +
                     "<td>" + SERVICIOS[i].servicio + "</td>" +
                     "<td>" + SERVICIOS[i].descripcion + "</td>" +
                     "<td>$" + SERVICIOS[i].precio + "</td>" +
                     "<td><button class='btn' onclick='agregarServicio(" + SERVICIOS[i].servid + ")'><i class='material-icons'>add_shopping_cart</i></button></td>"+
                     "</tr>"
        }
    }
    grilla.innerHTML = filas
    itemsEnCarrito()
}

document.body.onload = cargoServicios(grilladeservicios)

function itemsEnCarrito() {
    document.getElementById("itemscarrito").innerText = carrito.length
}

function agregarServicio(servid) {
    let existe = false
        for (let i in carrito) {
            if (carrito[i] == servid) {
                alert("No se pudo agregar más de una vez el mismo servicio")
                existe = true
                break
            }
        }
        if (existe == false) {
            carrito.push(servid)
            alert("Se ha agregado el servicio a tu carrito.")
        }
}