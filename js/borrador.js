d.body.onload = function() {
    recuperoCampos();
} 

function guardoCampo(campo) {
    debugger
    if (campo.value.trim() !== '')
        ls.setItem(campo.id, campo.value)
}

function recuperoCampos() {
    if (ls.length > 0) {
        for (let i = 0; i < ls.length; i++) {
            clave = ls.type(i)
            document.getElementById(clave).value = ls.getItem(clave)
        }    
    }
}

function navegar(page) {
    location.href = page
}
function confirmoDatos() {
    if (ls.length > 0) {
        for (let i = 0; i < ls.length; i++) {
            clave = ls.key(i)
            document.getElementById(clave).innerText = ls.getItem(clave)
        }    
    }
 }
 
 function confirmado() {
     alert('¡Gracias por registrarse con nosotros!')
     ls.clear()
 }
 
 document.addEventListener("DOMContentLoaded", confirmoDatos)
 debugger
ls.clear();
var campo = d.getElementsByClassName("campoForm").onblur = guardoCampo;

function guardoCampo(campo) {
    debugger
    if (campo.value !== '')
        ls.setItem(campo.id, campo.value)
}


//ls.setItem(clave, info)

//var clave = d.getElementsByClassName() ;
//debugger
//d.getElementById("name").onblur = guardoCampo;

//function guardoCampo () 

//window.onload=function(){
  //  name=d.getElementById('name');
    //lastname=d.getElementById('lastName');
  //  email=d.getElementById('email');
//}

 //guardarDatos.nombre = nombre
    //guardarDatos.apellido = apellido

    function artista(qMembers, qCrew, cars, cusd) {
        this.miembros = qMembers;
        this.crew = qCrew;
        this.cachetArs = cars;
        this.cachetUsd = cusd;
    }
    var cdb = new artista(5, 2, 15000, 650);
    var dtm = new artista(2, 1, 6000, 250);
    var rac = new artista(3, 2, 9000, 400);
    var amba = 1
    var alrededores = 1.5
    var arg = 1.8
    var limit = 1
    var sa = 1.5
    var na = 2
    var eu = 2.5
    var rm = 3
    var idArtista = []
    var idTipo = []
    var idZona = []
    var idQ = []
    var idTransporte = []
    var tipoEvento = []
    var descuento = []
    var traslado = []
    
    document.getElementById("opcion_tipo").onchange = obtenerTipo;
    function obtenerTipo(vtipo){
        var tipo = document.getElementById("opcion_tipo").value;
        obtenerTipo.vtipo = tipo
        $("resTarifa").remove(); 
        switch (obtenerTipo.vtipo) {
            case "Evento privado (fiestas, actos corporativos, etc)":
                tipoEvento = 1.2;
                break
            case "Evento pago (con venta de entradas)":
                tipoEvento = 1;
                break
            case "Evento público (de entrada gratuita o benéfico)":
                tipoEvento = 0.8;
                break
        }
        if (obtenerTipo.vtipo == "Seleccione el tipo de evento") 
        alert("Por favor indique el tipo de evento")
    }
    document.getElementById("opcion_artistas").onchange = obtenerArt;
    function obtenerArt(vart){
        var art = document.getElementById("opcion_artistas").value;
        obtenerArt.vart = art
        $("resTarifa").remove(); 
    
    }
    document.getElementById("opcion_venue").onchange = obtenerVen;
    function obtenerVen(vven) {
        var ven = document.getElementById("opcion_venue").value;
        obtenerVen.vven = ven
    }
    
    document.getElementById("QShows").onchange = obtenerShow;
    function obtenerShow(vsh) {
        var show = document.getElementById("QShows").value;
        debugger
        obtenerShow.vsh = show
        switch (obtenerShow.vsh) {
             case 1:
                 descuento = 1
                 break
             case "2":
                 descuento = 0.9;
                 break
             case "3":
                 descuento = 0.8;
                 break
             case "4":
                 descuento = 0.75;
                 break
             case "5":
                 descuento = 0.70;
                 break
             case "6":
                 descuento = 0.65;
                 break
            default:
                 descuento = 0.6;
                 break
        }
        if (obtenerShow.vsh == "0") 
        alert("Coloque un valor válido de shows")
        else if (obtenerShow.vsh == "") 
        alert("Por favor indique la cantidad de shows ")
    }
    
    document.getElementById("enviarCont").onclick = tarifa;
    function tarifa() {
        $("#loading").remove(); 
        $("#contrataciones").append("<div id='loading'><img src='./img/loading-02.gif'></div>");
        $("#resTarifa").remove(); 
        debugger
        setTimeout(()=>{
        $("#loading").remove(); 
        if (obtenerArt.vart == "Cuore di Belladona")    
        switch (obtenerVen.vven) {
            case "AMBA":
                 $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * amba* tipoEvento* obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Buenos Aires (interior), Córdoba o Santa Fé":
                $("#contrataciones").append("<h3 id='resTarifa'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * alrededores *  tipoEvento * obtenerShow.vsh) + "ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");          
                break
            case  "Resto de Argentina":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetArs"] * arg *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Países limítrofes":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * limit *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case  "Resto de Sudamérica":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * sa *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Centroamérica, norteamérica y Caribe":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * na *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Europa":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * eu *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Resto del mundo":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonCDB["cachetUsd"] * rm *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            default:
                alert("No seleccionó ninguna zona")
        }
        else if (obtenerArt.vart  == "Ractzon")
        switch (obtenerVen.vven) {
            case "AMBA":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * amba *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Buenos Aires (interior), Córdoba o Santa Fé":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * alrededores *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case  "Resto de Argentina":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetArs"] * arg *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Países limítrofes":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * limit *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case  "Resto de Sudamérica":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * sa *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Centroamérica, norteamérica y Caribe":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * na *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Europa":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + ( jsonRAC["cachetUsd"] * eu *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Resto del mundo":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonRAC["cachetUsd"] * rm *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            default:
                alert("No seleccionó ninguna zona")
        }
        else if (obtenerArt.vart == "Dawn to midday")
        switch (obtenerVen.vven) {
            case "AMBA":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * amba *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Buenos Aires (interior), Córdoba o Santa Fé":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * alrededores *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case  "Resto de Argentina":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetArs"] * arg *  tipoEvento * obtenerShow.vsh) +"ars. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Países limítrofes":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * limit *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case  "Resto de Sudamérica":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * sa *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Centroamérica, norteamérica y Caribe":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * na *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Europa":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * eu *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            case "Resto del mundo":
                $("#contrataciones").append("<h3 id='resTarifa' class='col-md-6'>La tarifa para la zona, artista y cantidad de shows seleccionados es de " + (jsonDTM["cachetUsd"] * rm *  tipoEvento * obtenerShow.vsh) +"USD. Recuerde que estas tarifas son de referencia y el precio final se definirá al momento de firmar el contrato</h3>");
                break
            default:
                alert("No seleccionó ninguna zona")
        }
        else alert("No se seleccionó ningún artista")
        },2500)
    }
    
    $(document.getElementById("QShows")).on('keypress',function(e) {
        if(e.which == 44) { 
            alert('Este campo no permite comas');
        }
    });
    