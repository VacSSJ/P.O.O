function IndetificarMayor(){
    let num1 = prompt(`Ingrese un numero: `)
    let num2 = prompt(`Ingrese otro numero: `)
    
    if(num1 < num2){
        resultado = (`<h2>${num1} es mayor</h2>`)
    }
    else{
        resultado = (`<h2>${num2} es mayor</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}