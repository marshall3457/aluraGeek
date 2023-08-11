const btnSearch = document.querySelector("[data-search]");
const inputElement = document.querySelector('.menu__input');
const logoSearch = document.querySelector(".menu__logo");
const botonLogin = document.querySelector(".menu__login");
const search = inputElement.parentElement;

btnSearch.addEventListener("click", () => {

    
    btnSearch.classList.add("menu__icono--ampliado");
    search.classList.add("menu__search--ampliado");
    if(botonLogin != null){
        botonLogin.style.display = "none";
    }
    logoSearch.style.display = "none";
    inputElement.classList.add("menu__input--ampliado");
    inputElement.focus();


}, false);

inputElement.addEventListener("blur", () => {
    btnSearch.classList.remove("menu__icono--ampliado");
    if(botonLogin != null){

        botonLogin.style.display = "block";
    }
    search.classList.remove("menu__search--ampliado");
    logoSearch.style.display = "block";
    inputElement.classList.remove("menu__input--ampliado");
},false);



