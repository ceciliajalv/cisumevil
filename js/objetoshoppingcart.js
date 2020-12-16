class carritoLista {
    constructor(carrito, servicios) {
        var total = 0
        this.carrito = carrito
        this.servicios = servicios
        this.verCompra = function (grillaCheckout) {
            let grilla = ""
                for (let i in this.carrito) {
                    for (let j in this.servicios) {
                        if (this.servicios[j].servid === carrito[i]) {
                            grilla += "<tr>" +
                                      "<td>" + servicios[j].servicio + "</td>" +
                                      "<td>" + servicios[j].precio + "</td>" +
                                      "</tr>"
                            total += servicios[j].precio 
                        }
                    }
                }            
                grillaCheckout.innerHTML = grilla
        }
        this.verTotales = function(grillatotales) {
            let grilla = "<tr>" +
                        "<td>TOTAL</td>" +
                        "<td>" + this.total() + "</td>" +
                        "</tr>"
            grillatotales.innerHTML = grilla
        }
        this.total = function() {
            return total
        }
    }
}