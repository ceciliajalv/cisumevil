let HTMLCard = "";
let contenidoJSON = []

function cargarRoaster() {
    debugger
   $.ajax({
      url: "js/bandas.json",
      dataType: "json",
      success: function(response) {
         contenidoJSON = response
         $.each(contenidoJSON, function(i) {
            HTMLCard += `<div class="d-flex flex-column">
            <h3>${contenidoJSON[i].banda}</h3>
            <img src="${contenidoJSON[i].foto}" alt="">
            <button onclick="verDetalle(${contenidoJSON[i].id})">Ver más</button>
            </div>`
         })
         $("#contenido").html(HTMLCard)
      },
      error: function() {
         HTMLCard = `<div class="center white-text"> 
         <h4>En este momento no contamos con artistas para mostrar aquí.</h4> 
      </div>`
         $("#contenido").html(HTMLCard)
      } 
   })
}

setTimeout(() => {
   cargarRoaster()
      $('#contenido').fadeIn("fast", function() {
         $('#cargando').fadeOut(200)
      })
}, 2000)

function verDetalle(i) {
    debugger
   let detalleJSON = contenidoJSON.find(item => item.id == i)
      if (detalleJSON != null) {
         localStorage.setItem("contenido", JSON.stringify(detalleJSON))
         location.href = "detail.html"
         console.log(detalleJSON)
      } else {
         console.error("No se encontró el elemento: " + i)
      }
}