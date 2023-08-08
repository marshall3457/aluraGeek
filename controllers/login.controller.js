import { clientService } from "../service/client-service.js";

const formulario =  document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const emailValue = document.querySelector("[data-email]").value
    const passwordValue = document.querySelector("[data-password]").value


    clientService.listaAdmins().then((data) => {
        data.forEach(({email, password}) => {    
            if(emailValue == email && passwordValue == password){
                window.location.href = "products.html";
            }
        }) 
    }).catch((error) => alert("Ocurrio un error"));

});


