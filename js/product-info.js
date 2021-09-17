var producto = document.getElementById("producto")
var comentarios = document.getElementById("comentarios")
var imagen = document.createElement("img")
var enviar = document.getElementById("enviar")
var puntuacion = document.getElementById("puntuacion")
var descripcion = document.getElementById("descripcion")

let today = new Date().toLocaleDateString()

/**function showImagesGallery(array){

    let htmlContentToAppend = "";
  

    for(i of array){
        htmlContentToAppend = `
        <div class="col-lg-3 col-md-4 col-6" align="justify">
           
                <img  src="` + i + `"  style="width:300px; float: right">      
        </div>
        `


producto.innerHTML += htmlContentToAppend
        
    }
    
}
 */

function showImagesGallery(array){
  var contenedor = document.createElement("div")
  contenedor.style.padding = "10px"
   
  for (i of array) {
   var imagen = document.createElement("img")
   imagen.style.width = "50%"
   imagen.style.padding = "5px"
   imagen.src = i
   contenedor.appendChild(imagen)    
  }

  producto.innerHTML += contenedor.innerHTML


}





document.addEventListener("DOMContentLoaded", async function(e){

    var infoProducto = (await getJSONData(PRODUCT_INFO_URL)).data;
 


producto.innerHTML += `<b style="font-size:160%;">`+  (infoProducto.name)+ ` </b>` + "</br>" + "</br>" +
(infoProducto.description) +  "</br>" + "</br>" +
"<b>Costo: </b>"    + (infoProducto.cost) + " " + (infoProducto.currency) +  "</br>" + "</br>" +
"<b>Vendidos: </b>"    + (infoProducto.soldCount) + "</br>" + "</br>" +
"<b>Categoria: </b>"    + (infoProducto.category) + "</br>" + "</br>" 
showImagesGallery(infoProducto.images) + "</br>"  
producto.innerHTML += "</br>" + "<b>Productos relacionados: </b>"    + (infoProducto.relatedProducts) + "</br>" ;


var infoComentarios = (await getJSONData(PRODUCT_INFO_COMMENTS_URL)).data;

for (i of infoComentarios) {
    var comentario = document.createElement("p")
comentario.innerHTML += "<b>Puntuación: </b>" + (i.score) + "</br>"  +
"<b>Descripción: </b>" + (i.description) + "</br>" +
"<b>usuario: </b>" +  (i.user) + "</br>" + 
"<b>fecha: </b>" + (i.dateTime) + "</br>";

comentario.style.border = " thin solid"
comentario.style.padding= "20px"
comentario.style["border-spacing"] = "10 px"
document.body.appendChild(comentario)
comentarios.appendChild(comentario)
}

enviar.onclick = function () {
    var comentario = document.createElement("p")
    comentario.innerHTML += "<b>Puntuación: </b>" + (puntuacion.value) +  "</br>" + 
    "<b>Descripción: </b>" + (descripcion.value) + "</br>" +
    "<b>usuario: </b>" +  (localStorage.currentloggedin) + "</br>" +
    "<b>fecha: </b>" + (today) + "</br>";
    
    comentario.style.border = "thin solid"
    comentario.style.padding= "20px"
    comentario.style["border-spacing"] = "10 px"
    document.body.appendChild(comentario)
comentarios.appendChild(comentario)

}


});