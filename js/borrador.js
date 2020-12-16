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
