let HTMLCard = ""
let informacionDeContenido = []

$(document).ready(function() {
    debugger
   if (localStorage.contenido != undefined) {
      informacionDeContenido = JSON.parse(localStorage.contenido)
      HTMLCard = `<h2 class="blur">${informacionDeContenido.banda}</h2>
      <div class="d-flex flex-row cardband">
          <div>
              <img src="${informacionDeContenido.fotom}" alt="">
          </div>
          <div class="d-flex flex-column infoband">
              <p>Año de formación: ${informacionDeContenido.formacion}</p>
              <p>Géneros: ${informacionDeContenido.genero} </p>
              <p>Albumes lanzados: ${informacionDeContenido.discos}</p>
              <p>Miembros oficiales: ${informacionDeContenido.integrantes}</p>
              <p>Breve historia sobre el artista: ${informacionDeContenido.descripcion}</p>
          </div>
      </div>`
   }
   $('#infoart').html(HTMLCard)
})

$(window).ready(function() {
   $('h2').fadeIn(800, function() {
      $('p').fadeIn(500)
      $('#contenido').slideDown("slow")
   })
})