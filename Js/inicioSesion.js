let loginUsuario = async () => {
    let camposLogin = {};

    camposLogin.usuario =  document.getElementById("usuario").value
    camposLogin.contrasenha = document.getElementById("contrasenha").value
    
    const peticion = await fetch("http://localhost:8084/Nuevo/InicioSesion", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(camposLogin)
    });
}

let boton = document.getElementById("guardar")

boton.addEventListener("click", ()=>{
    loginUsuario();
})

const usuario = document.getElementById("usuario");
const contrasenha = document.getElementById("contrasenha");
const formulario = document.getElementById("formulario");

let mensajesError = {};

mensajesError.usuarioInvalido = document.getElementById("usuarioInvalido");
mensajesError.contrasenhaInvalida = document.getElementById("contrasenhaInvalida");

formulario.addEventListener("submit", e=>{

    e.preventDefault();
    let msjUsuario = "";
    let msjContranseha = "";
    ingresar = true;

    if(usuario.value.trim() < 1 || usuario.value.length < 5){
        msjUsuario = 'debe ingresar un usuario con al menos 5 caracteres';
        ingresar = true;
    }
    if(contrasenha.value.trim() < 1 || usuario.value.length < 5){
        msjContranseha = 'debe ingresar una contraseña con al menos 5 caracteres';
        ingresar = true;
    }
    if(ingresar){
        mensajesError.usuarioInvalido.innerHTML = msjUsuario;
        mensajesError.contrasenhaInvalida.innerHTML = msjContranseha;
    }
});

document.addEventListener("DOMContentLoaded", function(){

    usuario.addEventListener("input", function(){
        if (usuario.value.trim() === "" || usuario.value.length < 5) {
            usuario.classList.remove("lleno");
            usuario.classList.add("vacio");
        } else {
            usuario.classList.remove("vacio");
            usuario.classList.add("lleno");
        }

    });

    contrasenha.addEventListener("input", function(){
        if(contrasenha.value.trim() === "" || contrasenha.value.length < 5){
            contrasenha.classList.remove("lleno");
            contrasenha.classList.add("vacio");
        } else{
            contrasenha.classList.remove("vacio");
            contrasenha.classList.add("lleno");
        }

    });
});
