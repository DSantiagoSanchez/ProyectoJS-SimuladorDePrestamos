//Arrays prestamo
let interes = [5,15,30];
let sueldosMinimos = [60000, 100000, 175000, 300000];
let prestamos = [125000, 250000, 500000, 800000];

//Registro usuario
let usuario = prompt(`Hola estimado usuario!!!
Estamos para ofrecerle los mejores prestamos a plazo fijo y con menor interes del mercado! Para comenzar introduzca su nombre y apellido completo.
          INFO PRESTAMOS
Sueldos Minimos       Prestamos de hasta
$${sueldosMinimos[0]}                       $${prestamos[0]}
$${sueldosMinimos[1]}                     $${prestamos[1]}
$${sueldosMinimos[2]}                     $${prestamos[2]}
$${sueldosMinimos[3]}                     $${prestamos[3]}
`);
let DNIUsuario = parseInt(prompt(usuario + " es un placer para nosotros poder brindarle nuestro servicio, para continuar por favor introduzca su DNI (solo numeros)."));
//let edadUsuario = parseInt(prompt("Introduzca su edad."));

//Datos para sacar el prestamo
let sueldoUsuario = parseInt(prompt("Introduzca su sueldo."));
let capital = parseFloat(prompt("Cuanto dinero desea sacar de prestamo."));
let cantCuotas = parseInt(prompt("Coloque el numero 3, 6 o 12 segun la cantidad de cuotas en las que desee sacar el prestamo."));

function CalcularInteres(){
    if(cantCuotas == 3){
        capital = capital + (capital * interes[0]) / 100;
        console.log("El monto total a devolver es $" + capital);
        capital = capital / 3;
        console.log("El precio mensual por cuota es de $" + capital);
    }else{
        if(cantCuotas == 6){
        capital = capital + (capital * interes[1]) / 100;
        console.log("El monto total a devolver es $" + capital);
        capital = capital / 6;
        console.log("El precio mensual por cuota es de $" + capital);
        }else{
            if(cantCuotas == 12){
                capital = capital + (capital * interes[2]) / 100;
                console.log("El monto total a devolver es $" + capital);
                capital = capital / 12;
                console.log("El precio mensual por cuota es de $" + capital); 
            }
        }
    }
}

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
}

CondicionesPrestamo();