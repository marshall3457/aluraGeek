import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    if(id == null){
        window.location.href = "/screens/error.html"
    }
    const imagen = document.querySelector("[data-imagen]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    try{
        const producto = await clientService.detalleProducto(id);
        if(producto.imagen && producto.categoria && producto.nombre && producto.precio && producto.descripcion){
            imagen.value = producto.imagen;
            categoria.value = producto.categoria;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        }else{
            throw new Error(); //creamos el error;
        }

    }catch(error){
        window.location.href = "/screens/error.html";
    }

}

obtenerInformacion();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientService.editarProducto(imagen,categoria,nombre,precio,descripcion, id).then(() => {
        alert("concluido");
    });
})
