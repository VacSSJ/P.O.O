function detectar(){
    let numero = prompt(`Ingrese un numero`)
    if(numero < 0){
        resultado = (`Es negativo: ${numero}`)
    }
    else if(numero > 0){
        resultado = (`ES Positivo: ${numero}`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}