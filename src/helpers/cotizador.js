
// obtener la diferencia de a;os
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

// calcular el total a pagar segun la marca

export function calcularMarca(marca){

    let incremento;

    switch(marca){
        case 'americano':
            incremento = 1.15;
            break;
        case 'europeo':
            incremento = 1.30;
            break;
        
        case 'asiatico':
            incremento = 1.05;
            break
        default:
            break 
    }
    return incremento;
}

// calcular el tipo de seguro , basico o completo

export function  obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;

}

// mostrar la primera letra en mayuscula

export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}