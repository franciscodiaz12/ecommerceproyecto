//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var contenedor = document.getElementsByClassName("container p-5")


document.addEventListener("DOMContentLoaded", async function (e) {
 
   var productos = (await getJSONData(PRODUCTS_URL)).data;

  var lista = document.createElement("ul");
  lista.style.alignContent = "left";
  lista.style["list-style-type"]= "none";
  lista.style.fontSize = "large";
  lista.style.fontFamily = "Arial, Helvetica, sans-serif";
  document.body.appendChild(lista);
  $(lista).appendTo(contenedor);
  for (let i of productos) {
    var imagen = document.createElement("img");
    imagen.src = (i.imgSrc);
    imagen.style["max-width"]= "60%";
    imagen.style["border-radius"]= "10px";
    imagen.style["color"]= "black";
    var objeto = document.createElement("li");
    objeto.style.padding = "30px"
    objeto.innerHTML = "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
   lista.appendChild(imagen);
    lista.appendChild(objeto);
    
  }

  
  
  






});

