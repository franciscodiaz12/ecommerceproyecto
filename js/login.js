//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



function ingresar() {
    localStorage.setItem("ingresado", "true");
    document.location.href = (" ");
}





var boton =  document.getElementById("boton");



boton.onclick = function() {
    ingresar();
    var username = document.getElementById('uname').value;

  localStorage.setItem("currentloggedin",username);

}



document.addEventListener("DOMContentLoaded", function(e){
    
    var uDisplay = document.getElementById("usuarioDisplay")
    uDisplay.innerHTML = " "
    
});