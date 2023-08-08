import { clientService } from "../service/client-service.js";

const btnRedirrecion = document.querySelector("[data-buttonLogin]");
btnRedirrecion.addEventListener("click", () => {
    window.location.href = "login.html";
}, false);



const crearNuevaLinea = (imagen, nombre, precio) => {
    const linea = document.createElement("div");
    const contenido = `
        <div class="container__img">
        <img class="product__img" src="${imagen}" alt="imagen del producto">
        </div>
        <h2 class="product__title">${nombre}</h2>
        <h2 class="product__price">${precio}</h2>
        <a class="product__link" href="#">Ver producto</a>
    `;

    linea.innerHTML = contenido;
    linea.classList.add('product');
    return linea;
};



const productStarWars = document.querySelector("[data-categoryStarWars]");
const productConsolas = document.querySelector("[data-categoryConsolas]");
const productVariados = document.querySelector("[data-categoryVariados]");

clientService.listaProductos().then((data) => {
    data.forEach(({imagen, nombre, precio, categoria}) => {
        if (categoria.toLowerCase() === "star wars") {    
            const nuevaLinea = crearNuevaLinea(imagen, nombre, precio);
            productStarWars.appendChild(nuevaLinea);
        }else if(categoria.toLowerCase() === "consolas"){
            const nuevaLinea = crearNuevaLinea(imagen, nombre, precio);
            productConsolas.appendChild(nuevaLinea);
        }else{
            const nuevaLinea = crearNuevaLinea(imagen, nombre, precio);
            productVariados.appendChild(nuevaLinea);
        }
    }) 
}).catch((error) => alert("Ocurrio un error"));