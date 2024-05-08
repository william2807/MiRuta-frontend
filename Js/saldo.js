//trae el boton, con el cual se hara la operacion
const botonClick = document.getElementById("botonSaldo");

//trae el lugar donde se va a dar la vistas de la operacion
const resultado = document.getElementById("saldoBuscado");
const pasajesTotales = document.getElementById("numeroPasajes")

/*trae el input del valor a calcular*/
const inputSaldo = document.getElementById("valorSaldo");

//añade un "click" en el evento principal para realizar el calculo
botonClick.addEventListener("click", ()=>{
  
  //implementa el costo del pasaje
  const costoPasaje = 2000;
  //castea a un float, el valor a calcular
  const presupuesto = parseFloat(inputSaldo.value);
  //Realiza la operacion  
  const pasajesComprables = Math.floor(presupuesto/costoPasaje);
  
  //Cambia el contenido del HTML con los resultados obtenidos 
  resultado.innerHTML = presupuesto;
  pasajesTotales.innerHTML = pasajesComprables + " pasajes";
});
