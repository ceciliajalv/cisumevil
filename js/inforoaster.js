let HTMLCard = "";
let contenidoJSON = []
let informacionDeContenido = ""

function cargarRoaster() {
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
         informacionDeContenido = JSON.parse(localStorage.contenido)
      HTMLCard2 = `<div id='detalles'>
      <h2 class="blur">${informacionDeContenido.banda}</h2>
      <div class="d-flex flex-row cardband">
          <div>
              <img src="${informacionDeContenido.fotom}" alt="">
          </div>
          <div class="d-flex flex-column infoband">
              <p><b>Año de formación:</b> ${informacionDeContenido.formacion}</p>
              <p><b>Géneros: </b> ${informacionDeContenido.genero} </p>
              <p><b>Albumes lanzados: </b> ${informacionDeContenido.discos}</p>
              <p><b>Miembros oficiales:</b> ${informacionDeContenido.integrantes}</p>
              <p><b>Breve historia sobre el artista: </b> ${informacionDeContenido.descripcion}</p>
          </div>
      </div>
      <button onclick="volverRoaster()">Volver a lista de artistas</button>
      </div>`
   $('#NA').hide();
   $('#contenido').html(HTMLCard2)
   $('#roaster').css({backgroundColor: "#ffe"})
         // location.href = "detail.html"
         console.log(detalleJSON)
      } else {
         console.error("No se encontró el elemento: " + i)
      }
}
function volverRoaster() {
   $('#NA').show();
   $('#contenido').html(HTMLCard)
   $('#detalles').hide();
   $('#roaster').css({backgroundColor: "#A41E62"})
}