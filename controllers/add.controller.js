import { clientService } from "../service/client-service.js";

const btnRedirrecion = document.querySelector("[data-buttonAdmin]");
btnRedirrecion.addEventListener("click", () => {
    window.location.href = "products.html";
}, false);



const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    clientService
    .agregarProducto(imagen, categoria, nombre, precio, descripcion)
    .then( () => {
        console.log("Elemento agregado");
    })
    .catch(err =>console.log(err));
});