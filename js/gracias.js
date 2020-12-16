function gracias () {    
    var fieldset = document.getElementById("fieldsetForm");
    fieldset.parentNode.removeChild(fieldset)  
    var formulario = document.getElementById("formContact");
    var gracias = document.createElement("h3");
        gracias.id = "muchasGracias"
        gracias.innerHTML = `Gracias por contactarte. En caso de respuesta nos pondremos en contacto a la brevedad.`;
        formulario.appendChild(gracias);
    var secContact = document.getElementById("contactanos")
    secContact.setAttribute("style","height:90vh");
}
 