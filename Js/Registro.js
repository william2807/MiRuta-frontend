let registrarUsuario = async () => {
    let camposRegistro = {};

    camposRegistro.nombres = document.getElementById("nombres").value;
    camposRegistro.apellidos = document.getElementById("apellidos").value;
    camposRegistro.documento = document.getElementById("documento").value;
    camposRegistro.correo_electronico = document.getElementById("correo_electronico").value;
    camposRegistro.tarjeta_sitp = document.getElementById("tarjeta_sitp").value;
    camposRegistro.telefono = document.getElementById("telefono").value;

    const peticion = await fetch("http://localhost:8084/Usuario/registrar", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(camposRegistro)
    });
}

let boton = document.getElementById("btnRegistrar");

boton.addEventListener('click', () => {
    registrarUsuario();
});

