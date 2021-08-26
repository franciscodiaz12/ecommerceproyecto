//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



function ingresar() {
    localStorage.setItem("ingresado", "true");
}

document.addEventListener("DOMContentLoaded", function(e){
    
    var boton =  document.getElementById("boton");
    boton.onclick = ingresar();
    
});