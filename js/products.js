//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var contenedor = document.getElementsByClassName("container p-5");


var lista = document.createElement("ul");
var imagen = document.createElement("img");


var rangoBoton = document.getElementById("rango");
var minimo = document.getElementById("minimo");
var maximo = document.getElementById("maximo");

var precioAscendente = document.getElementById("ascendente");
var precioDescendente =  document.getElementById("descendente");
var relevancia =  document.getElementById("relevancia");





document.addEventListener("DOMContentLoaded", async function (e) {
 
  var productos = (await getJSONData(PRODUCTS_URL)).data;
  lista;
  imagen;
 

  
  for ( i of productos) {
    
    var valores = document.createElement("li");
    valores.innerHTML =  "<a href=product-info.html> <img src=\"" + (i.imgSrc) + "\" style=width:500px ></a>"  + "</br>" + "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
    
    document.body.appendChild(lista);
    $(lista).appendTo(contenedor);
    lista.appendChild(imagen);
    lista.appendChild(valores);
    lista.style.alignContent = "left";
    lista.style["list-style-type"]= "none";
    lista.style.fontSize = "large";
    lista.style.fontFamily = "Arial, Helvetica, sans-serif";
    valores.style.padding = "30px";
   
   }
  
  
 
    rangoBoton.onclick = function() {
    
   
    lista.innerHTML = " "
    for ( i of productos) {
    var valores = document.createElement("li");
    
    if ( minimo.value <= (i.cost) && maximo.value >= (i.cost) ) {
    valores.innerHTML =  "<img src=\"" + (i.imgSrc) + "\" style=width:500px>"  + "</br>" + "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
    }
    lista.appendChild(valores);
 }
 

   }


precioAscendente.onclick = function() {
 

 lista.innerHTML = " "
  productos.sort(function(a, b){return a.cost-b.cost});
  for ( i of productos) {
  var valores = document.createElement("li");
  valores.innerHTML =  "<img src=\"" + (i.imgSrc) + "\" style=width:500px>"  + "</br>" + "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
  lista.appendChild(valores); 
}
 
}

precioDescendente.onclick = function() {
  lista.innerHTML = " "
  productos.sort(function(a, b){return b.cost-a.cost});
  for ( i of productos) {
  var valores = document.createElement("li");
  valores.innerHTML =  "<img src=\"" + (i.imgSrc) + "\" style=width:500px>"  + "</br>" + "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
  lista.appendChild(valores); 
}
  
}

relevancia.onclick = function() {
  lista.innerHTML = " "
  productos.sort(function(a, b){return b.soldCount-a.soldCount});
  for ( i of productos) {
  var valores = document.createElement("li");
  valores.innerHTML =  "<img src=\"" + (i.imgSrc) + "\" style=width:500px>"  + "</br>" + "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
  lista.appendChild(valores); 
}

}

  
});




