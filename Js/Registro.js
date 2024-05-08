//se trae el contenido del formulario HTML
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const documento = document.getElementById("documento");
const correo = document.getElementById("correo_electronico");
const tarjeta_sitp = document.getElementById("tarjeta_sitp");
const telefono = document.getElementById("telefono");

//se trae el formulario completo
const formularioRegistro = document.getElementById("formulario-registro");

//se crea una coleccion vacia(separa los campos obligatorios de los opcionales)
let mensajesErrorRegistro = {};

/*se agregan los campos en los cuales se requiere modificar los msjs 
que son obligatorios y se agregan a la coleccion anterior*/ 
mensajesErrorRegistro.nombresInvalidos = document.getElementById("msjNombres");
mensajesErrorRegistro.apellidosInvalidos = document.getElementById("msjApellidos");
mensajesErrorRegistro.documentoInvalido = document.getElementById("msjDocumento");

//se crea una coleccion vacia(separa los campos opcionales de los obligatorios)
let registroOpcionales = {};

/*se agregan los campos en los cuales se requiere modificar los msjs 
que son opcionales y se agregan a la coleccion anterior*/ 
registroOpcionales.correoOpcional = document.getElementById("msjEmail");
registroOpcionales.tarjetaOpcional = document.getElementById("msjTarjeta");
registroOpcionales.telefonoOpcional = document.getElementById("msjTelefono");

/* se crea variables de tipo string con el fin de que puedan ser modificados
segun el comportamiento del formulario*/
let msjNombres = '';
let msjApellidos = '';
let msjDocumento = '';
let msjCorreo = '';
let msjTarjetaSitp = '';
let msjTelefono = '';

/*En el siguiente fragmento se haran las validaciones del formulario en las cuales
sea restringido el ingreso si no se llenan el campo de los formularios*/


//se crea un evento al formulario tipo submit
formularioRegistro.addEventListener("submit", e =>{

    //se previene para que no se envie
    e.preventDefault();

    // se crea la variable booleana , para hacer uso en el evento de del formularioRegistro
    ingresar = true;

    /*Se realizan las validaciones de que los campos que son obligatorios sean llenados
    de lo contrario, el formulario no podra enviarse al servidor*/
    if(nombres.value.trim() === ""|| nombres.value.length < 2){
        msjNombres = 'debes ingresar un nombre valido';
        mensajesErrorRegistro.nombresInvalidos.classList.add("campo-submit-incompleto");
        ingresar = false;
    }
    if(apellidos.value.trim() === "" || nombres.value.length < 2){
        mensajesErrorRegistro.apellidosInvalidos.classList.add("campo-submit-incompleto");
        msjApellidos = 'debes ingresar un apellido valido';
        ingresar = false;
    } 
    if(documento.value.trim() === "" || documento.value.length < 7){
        mensajesErrorRegistro.documentoInvalido.classList.add("campo-submit-incompleto");
        msjDocumento = 'debes ingresar un documento valido';
        ingresar = false;
    }

    //en este caso, si los if son verdaderos entran y modifican el texto del mensaje
    if(!ingresar){
        mensajesErrorRegistro.nombresInvalidos.innerHTML = msjNombres;
        mensajesErrorRegistro.apellidosInvalidos.innerHTML = msjApellidos;
        mensajesErrorRegistro.documentoInvalido.innerHTML = msjDocumento;
    }else{
        window.location.href = "inicioSesion.html";
    }
});

/*en el siguiente fragmento se hara las validaciones de los campos que son llemados
de lo contrario se enviara un mensaje informativo para que sean llenados*/

/*se crea un evento para el respectivo campo con blur para que cuando pierda el enfoque
en el campo se active el texto*/
nombres.addEventListener('blur', ()=>{

    //se valida si los caracteres ingresados son validos
    if(nombres.value.trim() === '' || nombres.value.length < 3){

        //se modifica la variable y se ingresa un texto informativo
        msjNombres = 'debes ingresar tu(s) nombre(s)';
        // se agrega el estilo al hacer la validacion
        mensajesErrorRegistro.nombresInvalidos.classList.add("vacio-registro");

        //se muestra el mensaje en pantalla
        mensajesErrorRegistro.nombresInvalidos.innerHTML = msjNombres;

    }else{
        /*en caso de que los caracteres cumple con las condiciones, se modifica
        la variable del msj para que cuando pase al siguiente campo, se deje de visualizar
        el texto informativo*/
        msjNombres = '';

        //se muestra el mensaje en pantalla
        mensajesErrorRegistro.nombresInvalidos.innerHTML = msjNombres;
    }
});

apellidos.addEventListener('blur', ()=>{

    if(apellidos.value.trim() === '' || apellidos.value.length < 3){

        msjApellidos = 'debes ingresar tu(s) apellido(s)';
        mensajesErrorRegistro.apellidosInvalidos.classList.add('vacio-registro');

        mensajesErrorRegistro.apellidosInvalidos.innerHTML = msjApellidos;

    }else{

        msjApellidos = '';
        mensajesErrorRegistro.apellidosInvalidos.innerHTML = msjApellidos;
    }
});

documento.addEventListener('blur', ()=>{

    if(documento.value.trim() === '' || documento.value.length < 8){

        msjDocumento = 'debes ingresar tu numero de documento';
        mensajesErrorRegistro.documentoInvalido.classList.add('vacio-registro');

        mensajesErrorRegistro.documentoInvalido.innerHTML = msjDocumento;

    }else{

        msjDocumento = '';
        mensajesErrorRegistro.documentoInvalido.innerHTML = msjDocumento;
    }
});

correo.addEventListener('blur', ()=>{

    if(correo.value.trim() === '' || correo.value.length < 3){

        msjCorreo = 'ingresa tu correo electronico *(opcional)';
        registroOpcionales.correoOpcional.classList.add('vacio-registro');

        registroOpcionales.correoOpcional.innerHTML = msjCorreo;

    }else{

        msjCorreo = '';
        mensajesErrorRegistro.correoOpcional.innerHTML = msjCorreo;
    }
});

tarjeta_sitp.addEventListener('blur', ()=>{

    if(tarjeta_sitp.value.trim() === '' || tarjeta_sitp.value.length < 16 ){

        msjTarjetaSitp = 'ingresa tu numero de tarjeta sitp *(opcional)';
        registroOpcionales.tarjetaOpcional.classList.add('vacio-registro');
        ingresar = true;

        registroOpcionales.tarjetaOpcional.innerHTML = msjTarjetaSitp;

    }else{

        msjTarjetaSitp = '';
        registroOpcionales.tarjetaOpcional.innerHTML = msjTarjetaSitp;
    }
});

telefono.addEventListener('blur', ()=>{

    if(telefono.value.trim() === '' || telefono.value.length < 10){
        msjTelefono = 'ingresa tu numero del celular *(opcional)';
        registroOpcionales.telefonoOpcional.classList.add('vacio-registro');

        registroOpcionales.telefonoOpcional.innerHTML = msjTelefono;

    }else{

        msjTelefono = '';
        registroOpcionales.telefonoOpcional.innerHTML = msjTelefono;
    }     
});

/*en este fragmento de codigo se añadira estilo a los bordes para darle una guia
al usuario de cuanta longitud minima deben tener cada campo*/

// se añade un evento al dom y se crea una funcion que modifque los input del formulario
document.addEventListener("DOMContentLoaded", function(){

    //se añade un evento de tipo input para modificar el estilo
    nombres.addEventListener("input", function(){
        /*se realiza la validacion, si esta vacio o es menor a 3*/
        if (nombres.value.trim() === "" || nombres.value.length < 3) {

            //cambie el estilo de lleno a vacio, para que modifique el estilo del campo
            nombres.classList.remove("lleno");
            nombres.classList.add("vacio");

        }else{
            //de lo contraria cambia el estilo de vacio a lleno
            nombres.classList.remove("vacio");
            nombres.classList.add("lleno");
        }
    });

    apellidos.addEventListener("input", function(){
        if(apellidos.value.trim() === "" || apellidos.value.length <= 2){

            apellidos.classList.remove("lleno");
            apellidos.classList.add("vacio");

        }else{

            apellidos.classList.remove("vacio");
            apellidos.classList.add("lleno");
        }
    });

    documento.addEventListener("input", function(){

        if(documento.value.trim() === "" || documento.value.length < 8){

            documento.classList.remove("lleno");
            documento.classList.add("vacio");
        }else{

            documento.classList.remove("vacio");
            documento.classList.add("lleno");
        }
    });

    correo.addEventListener("input", function(){

        if(correo.value.trim() === "" || correo.value.length <= 6){

            correo.classList.remove("lleno");
            correo.classList.add("vacio");

        } else{

            correo.classList.remove("vacio");
            correo.classList.add("lleno");
        }
    });

    tarjeta_sitp.addEventListener("input", function(){

        if(tarjeta_sitp.value.trim() === "" || tarjeta_sitp.value.length < 16){

            tarjeta_sitp.classList.remove("lleno");
            tarjeta_sitp.classList.add("vacio");

        }else{

            tarjeta_sitp.classList.remove("vacio");
            tarjeta_sitp.classList.add("lleno");
        }
    });

    telefono.addEventListener("input", function(){

        if(telefono.value.trim() === "" || telefono.value.length < 10){

            telefono.classList.remove("lleno");
            telefono.classList.add("vacio");

        } else{

            telefono.classList.remove("vacio");
            telefono.classList.add("lleno");
        }
    });
});

// se crea una funcion asincronica para el formulario
let registrarUsuario = async () => {

    //se crea una coleccion
    let camposRegistro = {};

    //se trae los valores de los campos del formulario y se agregam a la coleccion(camposRegisto)
    camposRegistro.nombres = document.getElementById("nombres").value;
    camposRegistro.apellidos = document.getElementById("apellidos").value;
    camposRegistro.documento = document.getElementById("documento").value;
    camposRegistro.correo_electronico = document.getElementById("correo_electronico").value;
    camposRegistro.tarjeta_sitp = document.getElementById("tarjeta_sitp").value;
    camposRegistro.telefono = document.getElementById("telefono").value;

    /*se hace la peticion al metodo POST para mandar los valores recolectados al servidor
    en un formato JSON*/
    const peticion = await fetch("http://localhost:8084/Usuario/registrar", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //se convierte las cadenas de texto de los campos del formulario en JSON
        body: JSON.stringify(camposRegistro)
    });

    if(peticion.ok){
        const status = peticion.body;

        console.log("registro exitoso: ", status);
    }else{
        console.error("error al registrar: ", peticion.status);
    }

}

//se crea una variable que trae el boton del submit
let boton = document.getElementById("btnRegistrar");

/*se crea un evento en el cual, cuando se haga click en el boton de submit, 
llame a la funcion registarUsuario para asi mandar el formulario*/
boton.addEventListener('click', () => {
    registrarUsuario();
});