//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var contenedor = document.getElementsByClassName("container p-5")


document.addEventListener("DOMContentLoaded", async function (e) {
 
  


  var productos = (await getJSONData(PRODUCTS_URL)).data;
  const listaProductos = JSON.stringify(productos);
  var datos = JSON.parse(listaProductos);

  var list = document.createElement("ul");
  list.
  document.body.appendChild(list);
  $(list).appendTo(contenedor);
  for (let i of datos) {
    var imagen = document.createElement("img");
    imagen.src = (i.imgSrc);
    var objeto = document.createElement("li");
    objeto.innerHTML = "Nombre: " + (i.name) + "</br>" + "Descripción: " + (i.description) + "</br>" + "Costo: " + (i.cost) + "</br>" + "Moneda: " + (i.currency) + "</br>"  + "Vendidos: " + (i.soldCount)
   list.appendChild(imagen);
    list.appendChild(objeto);
    
  }

  
  
  






});

