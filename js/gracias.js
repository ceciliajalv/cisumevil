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
    var errorform = document.getElementById("datoinvalido")
    if (nombre == "") {
        errorform.innerHTML = `Por favor complete todos los campos`
        errorform.style.border="1px solid darkred"
    }
    else if (apellido == "") {
        errorform.innerHTML = `Por favor complete todos los campos`
        errorform.style.border="1px solid darkred"
    }
    else if (email == "") {
        errorform.innerHTML = `Por favor complete todos los campos`
        errorform.style.border="1px solid darkred"
    }
    else if (asunto == "") {
        errorform.innerHTML = `Por favor complete todos los campos`
        errorform.style.border="1px solid darkred"
    }
    else if (mensaje == "") {
        errorform.innerHTML = `Por favor complete todos los campos`
        errorform.style.border="1px solid darkred"
    }
    else {
        errorform.innerHTML = ""
        errorform.style.border="none"
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


 