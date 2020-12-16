var ls = localStorage;
var d = document;

ls.clear();

d.getElementById("name").onblur= guardarDatos;
d.getElementById("lastName").onblur= guardarDatos;

function guardarDatos() {
    let nombre=d.getElementById("name").value;
    if(nombre.value !== '') { 
    ls.setItem("nombre" , nombre);
    }
    let apellido=d.getElementById("lastName").value;
    if(apellido.value !== '') { 
    ls.setItem("apellido" , apellido);
    }
}




