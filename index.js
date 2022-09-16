const formulario = document.querySelector("#formulario");

//Crear evento
formulario.addEventListener("submit", confirmarInformacion);


//mis funciones
function confirmarInformacion(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const cantPrestamo = parseFloat(document.getElementById("cantPrestamo").value);
    const cantidadCuotas = parseInt(document.getElementById("cantidadCuotas").value);
    
    const respuesta = document.getElementById("respuesta");
    
    
    respuesta.textContent = `El usuario ${nombre} (${edad} años de edad) con un sueldo de $${sueldo} mensuales solicita un 
    prestamo de $${cantPrestamo} a pagar en ${cantidadCuotas} cuotas.`;
    
    
}





/*
function CondicionesPrestamo(){
if(sueldoUsuario < sueldosMinimos[0]){
    alert("Su sueldo no cumple con el monto minimo para poder sacar prestamos");
}else if(sueldoUsuario >= sueldosMinimos[0] && capital <= prestamos[0]){
    CalcularInteres();
}else if(sueldoUsuario < sueldosMinimos[1] && capital >= prestamos[0]){
    alert("Su sueldo no cumple con el monto minimo para poder sacar mas de $" + prestamos[0])
}else if(sueldoUsuario >= sueldosMinimos[1] && capital <= prestamos[1]){
    CalcularInteres();
}else if(sueldoUsuario < sueldosMinimos[2] && capital >= prestamos[1]){
    alert("Su sueldo no cumple con el monto minimo para poder sacar mas de $" + prestamos[1])
}else if(sueldoUsuario >= sueldosMinimos[2] && capital <= prestamos[2]){
    CalcularInteres();
}else if(sueldoUsuario < sueldosMinimos[3] && capital >= prestamos[2]){
    alert("Su sueldo no cumple con el monto minimo para poder sacar mas de $" + prestamos[2])
}else if(sueldoUsuario >= sueldosMinimos[3] && capital <= prestamos[3]){
    CalcularInteres();
}else if(capital > prestamos[3]){
    alert("El monto que desea sacar supera nuestro limite de $" + prestamos[3])
}
*/