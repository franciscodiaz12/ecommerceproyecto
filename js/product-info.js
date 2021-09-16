var producto = document.getElementById("producto")
var comentarios = document.getElementById("comentarios")
var imagen = document.createElement("img")
var enviar = document.getElementById("enviar")
var puntuacion = document.getElementById("puntuacion")
var descripcion = document.getElementById("descripcion")

let today = new Date().toLocaleDateString()

function showImagesGallery(array){

    let htmlContentToAppend = "";
   

    for(i of array){
        

        htmlContentToAppend = `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + i + `"  alt="" style=width:500px>
            </div>
        </div>
        `
producto.innerHTML += htmlContentToAppend
        
    }
    
}




document.addEventListener("DOMContentLoaded", async function(e){

    var infoProducto = (await getJSONData(PRODUCT_INFO_URL)).data;
 


producto.innerHTML += "Nombre: " + (infoProducto.name) + "</br>" + 
"Descripción: " + (infoProducto.description) +  "</br>" +
"Costo: "    + (infoProducto.cost) + " " + (infoProducto.currency) +  "</br>" +
"Vendidos: "    + (infoProducto.soldCount) + "</br>" +
"Categoria: "    + (infoProducto.category) + "</br>" 
showImagesGallery(infoProducto.images) + "</br>"  
producto.innerHTML += "Productos relacionados: "    + (infoProducto.relatedProducts) + "</br>" ;

var infoComentarios = (await getJSONData(PRODUCT_INFO_COMMENTS_URL)).data;

for (i of infoComentarios) {
    var comentario = document.createElement("p")
comentario.innerHTML += "Puntuación: " + (i.score) + "</br>"  +
"Descripción: " + (i.description) + "</br>" +
"usuario: " +  (i.user) + "</br>" + 
"fecha: " + (i.dateTime) + "</br>";

document.body.appendChild(comentario)
comentarios.appendChild(comentario)
}

enviar.onclick = function () {
    var comentario = document.createElement("p")
    comentario.innerHTML += "Puntuación: " + (puntuacion.value) +  "</br>" + 
    "Descripción: " + (descripcion.value) + "</br>" +
    "usuario: " +  (localStorage.currentloggedin) + "</br>" +
    "fecha: " + (today) + "</br>";
    
    document.body.appendChild(comentario)
comentarios.appendChild(comentario)

}


});