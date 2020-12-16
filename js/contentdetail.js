let HTMLTable = ""
let HTMLtrailer = ""
let informacionDeContenido = ""

$(document).ready(function() {
   if (localStorage.contenido != undefined) {
      informacionDeContenido = JSON.parse(localStorage.contenido)
      HTMLCanvasElement = `<h2 class="blur">${informacionDeContenido.banda}</h2>
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
   $('#contenido').html(HTMLCard)
})

$(window).ready(function() {
   $('h1').fadeIn(800, function() {
      $('h4').fadeIn(500)
      $('#contenido').slideDown("slow")
   })
})