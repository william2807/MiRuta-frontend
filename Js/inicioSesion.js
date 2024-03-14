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