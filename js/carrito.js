function muestroCheckout () {
    if (carrito.length == 0) {
        alert("Su carrito se encuentra vacío")
    } 
    else {
        changuito = new carritolista(carrito, servicios)
        changuito.verCompra(checkout)
        changuito.verTotales(totales)
        carritolista.classList.remove('d-none')    
        servicios.classList.add('d-none') 
    }
}

function cerrar() {
    carritolista.classList.add('d-none')
}