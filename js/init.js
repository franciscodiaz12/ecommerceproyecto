const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";




var contenedorSuperior = document.getElementsByClassName("container d-flex flex-column flex-md-row justify-content-between");


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}



function redireccionar() {
  if ((localStorage.getItem("ingresado") != ("true") ) && (window.location.pathname.split('/').pop() != "login.html"))
  {
  window.location.replace("login.html");
  }
}


document.addEventListener("DOMContentLoaded", function(e){
  
  redireccionar();


 
  var usuarioDisplay = document.createElement("div");
  let htmlContentToAppend = ""
  
  htmlContentToAppend += `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   ` + localStorage.currentloggedin + `
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="cart.html">Ver mi carrito</a>
    <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
    <button class="dropdown-item" id= "cerrarSesion" onclick="windlocalStorage.currentloggedin">Cerrar sesión</button>
  </div>
</div>


`
usuarioDisplay.innerHTML += htmlContentToAppend



;
  usuarioDisplay.className = "py-2 d-none d-md-inline-block";
  usuarioDisplay.id = "usuarioDisplay"
  usuarioDisplay.style["color"] = "white";
  document.body.appendChild(usuarioDisplay);
  $(usuarioDisplay).appendTo(contenedorSuperior);
  
  var cerrarSesion = document.getElementById("cerrarSesion")
  cerrarSesion.onclick = function() {
    localStorage.clear("currentloggedin") 
    window.location.replace("login.html")
  }
  
});

