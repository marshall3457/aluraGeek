import { clientService } from "../service/client-service.js";

const btnRedirrecion = document.querySelector("[data-buttonEdit]");
btnRedirrecion.addEventListener("click", () => {
    window.location.href = "product-add.html";
}, false);

const crearNuevaLinea = (imagen, nombre, precio,id) => {
    const linea = document.createElement("div");
    const contenido = `
        <div class="container__img" style="background-image: url('${imagen}')">
            <button class="product__delete" type="button" id = "${id}" data-delete><img src="assets/delete-button.png" alt="boton para eliminar"></button>
            <button class="product__edit" type="button" id = "${id}" data-edit><img src="assets/edit-button.png" alt="boton para editar"></button>
        </div>
        <h2 class="product__title">${nombre}</h2>
        <h2 class="product__price">${precio}</h2>
        <h2 class="product__id">#${id}</h2>
    `;

    linea.innerHTML = contenido;
    linea.classList.add('product');
    const btnDelete = linea.querySelector("[data-delete]");
    btnDelete.addEventListener("click", () => {
        const idDelete = btnDelete.id;
        clientService.eliminarProducto(idDelete).then( () => {
            location.reload();
        }).catch(err => alert("Ocurrio un error"))
    })

    const btnEdit = linea.querySelector("[data-edit]");
    btnEdit.addEventListener("click", () => {
        const id = btnEdit.id;
        window.location.href = `product-modify.html?id=${id}`;
        
    })

    
    return linea;
};

const product = document.querySelector("[data-all]");


clientService.listaProductos().then((data) => {
    data.forEach(({imagen, nombre, precio, id}) => {
        const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
        product.appendChild(nuevaLinea);
    }) 
}).catch((error) => alert("Ocurrio un error"));



