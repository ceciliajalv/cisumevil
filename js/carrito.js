function muestroCheckout () {
    if (carrito.length == 0) {
        alert("Su carrito se encuentra vacío")
    } 
    else {
        changuito = new carritoLista(carrito, servicios)
        changuito.verCompra(checkout)
        changuito.verTotales(totales)
        carritoLista.classList.remove('d-none')    
        servicios.classList.add('d-none') 
    }
}

function cerrar() {
    carritoLista.classList.add('d-none')
}