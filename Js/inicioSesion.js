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

    if(usuario.value.length < 1){
        msjUsuario = 'se debe ingresar un usuario valido';
        ingresar = true;
    }
    if(contrasenha.value.length < 1){
        msjContranseha = 'se debe ingresar una contraseña valida';
        ingresar = true;
    }
    if(ingresar){
        mensajesError.usuarioInvalido.innerHTML = msjUsuario;
        mensajesError.contrasenhaInvalida.innerHTML = msjContranseha;
    }
});