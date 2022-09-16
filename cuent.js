const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", CalcularInteres);

//Caracteristicas prestamo
const interes = [5,15,30];
const sueldosMinimos = [60000, 100000, 175000, 300000];
const prestamos = [125000, 250000, 500000, 800000];

const infoPrestamo = document.getElementById("mostrarInfo");
function MostrarInfo(){
    alert(`INFO PRESTAMOS
    Sueldos Minimos       Prestamos de hasta
    $${sueldosMinimos[0]}                       $${prestamos[0]}
    $${sueldosMinimos[1]}                     $${prestamos[1]}
    $${sueldosMinimos[2]}                     $${prestamos[2]}
    $${sueldosMinimos[3]}                     $${prestamos[3]}`)
}
infoPrestamo.addEventListener("click", MostrarInfo);


function CalcularInteres(){
    if(cantidadCuotas == 3){
        sueldo = sueldo + (sueldo * interes[0]) / 100;
        //console.log("El monto total a devolver es $" + sueldo);
        respuesta2.textContent = `El monto total a devolver es de $${sueldo}`;
        sueldo = sueldo / 3;
        console.log("El precio mensual por cuota es de $" + sueldo);
    }else{
        if(cantidadCuotas == 6){
            sueldo = sueldo + (sueldo * interes[1]) / 100;
            console.log("El monto total a devolver es $" + sueldo);
            sueldo = sueldo / 6;
            console.log("El precio mensual por cuota es de $" + sueldo);
        }else{
            if(cantidadCuotas == 12){
                sueldo = sueldo + (sueldo * interes[2]) / 100;
                console.log("El monto total a devolver es $" + sueldo);
                sueldo = sueldo / 12;
                console.log("El precio mensual por cuota es de $" + sueldo); 
            }
        }
    }
}