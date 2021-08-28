//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var contenedor = document.getElementsByClassName("container p-5")


document.addEventListener("DOMContentLoaded", async function (e) {
 
  


  var productos = (await getJSONData(PRODUCTS_URL)).data;
  const listaProductos = JSON.stringify(productos);
  var datos = JSON.parse(listaProductos);

  var list = document.createElement("ul");
  list.style.alignContent = "left";
  list.style["list-style-type"]= "none";
  list.style.fontSize = "large"
  list.style.fontFamily = "Arial, Helvetica, sans-serif";
  document.body.appendChild(list);
  $(list).appendTo(contenedor);
  for (let i of datos) {
    var imagen = document.createElement("img");
    imagen.src = (i.imgSrc);
    imagen.style["max-width"]= "60%";
    imagen.style["border-radius"]= "10px";
    imagen.style["color"]= "black";
    var objeto = document.createElement("li");
    objeto.style.padding = "30px"
    objeto.innerHTML = "<span style='font-weight: bold;'>Nombre: </span>"   + (i.name) + "</br>" + "<span style='font-weight: bold;'>Descripción: </span>" + (i.description) + "</br>" + "<span style='font-weight: bold;'>Costo: </span>" + (i.cost) + " " + (i.currency) + "</br>"  + "<span style='font-weight: bold;'>Vendidos: </span>" + (i.soldCount)
   list.appendChild(imagen);
    list.appendChild(objeto);
    
  }

  
  
  






});

