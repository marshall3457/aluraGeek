const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const listaAdmins = () => fetch("http://localhost:3000/admin").then((respuesta) => respuesta.json());

const agregarProducto = (imagen,categoria,nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({imagen,categoria,nombre, precio, descripcion, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => 
    respuesta.json());
}

const editarProducto = (imagen,categoria,nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,categoria,nombre, precio, descripcion})  //Para convertilo en una cadena json osea un objeto ya que no lee string normales,
    })                                          //En el contexto de la función actualizarCliente, se utiliza JSON.stringify para convertir el objeto {nombre, email} en una cadena JSON. Esto se debe a que el cuerpo (body) de la solicitud HTTP debe ser una cadena, y no un objeto JavaScript.
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))

}


export const  clientService = {
    listaProductos,
    listaAdmins,
    agregarProducto,
    eliminarProducto,
    editarProducto,
    detalleProducto,
    

}