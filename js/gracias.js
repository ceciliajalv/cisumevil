var nombre = ""
var apellido = ""
var email = ""
var asunto = ""
var mensaje = ""

document.getElementById("name").onchange = getname
function getname() {
    nombre = document.getElementById("name").value
}
document.getElementById("lastName").onchange = getLastname
function getLastname() {
    apellido = document.getElementById("lastName").value
}
document.getElementById("email").onchange = getemail
function getemail(){
    email = document.getElementById("email").value
}
document.getElementById("asunto").onchange = getasunto
function getasunto(){
    asunto = document.getElementById("asunto").value
}
document.getElementById("mensajecontact").onchange = getmensaje
function getmensaje() {
    mensaje = document.getElementById("mensajecontact").value
}


$("#enviarinput").hide();
function errorDatos() {
    debugger
    if (nombre == "") {
        var errorform = document.getElementById("datoinvalido")
        errorform.innerHTML = `Por favor complete todos los campos`
        errorform.style.border="1px solid darkred"
    }
    else if (apellido == "") {
        var errorform = document.getElementById("datoinvalido")
        errorform.innerHTML = `Por favor complete todos los campos`
    }
    else if (email == "") {
        var errorform = document.getElementById("datoinvalido")
        errorform.innerHTML = `Por favor complete todos los campos`
    }
    else if (asunto == "") {
        var errorform = document.getElementById("datoinvalido")
        errorform.innerHTML = `Por favor complete todos los campos`
    }
    else if (mensaje == "") {
        var errorform = document.getElementById("datoinvalido")
        errorform.innerHTML = `Por favor complete todos los campos`
    }
    else {
        $("#validarDatos").hide();
        $("#enviarinput").fadeIn();
    }
}
function resultadoGracias() {
    var fieldset = document.getElementById("fieldsetForm");
    fieldset.parentNode.removeChild(fieldset)  
    var formulario = document.getElementById("formContact");
    var gracias = document.createElement("h3");
        gracias.id = "muchasGracias"
        gracias.innerHTML = `Gracias por contactarte. En caso de respuesta nos pondremos en contacto a la brevedad.`;
        formulario.appendChild(gracias);
    var secContact = document.getElementById("contactanos")
    secContact.setAttribute("style","height:85vh");
    $(".othercontact").hide()
}

// // var email = document.getElementById()
// // email.setCustomValidity("incorrecto")
// // const email = document.getElementById("email");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

 