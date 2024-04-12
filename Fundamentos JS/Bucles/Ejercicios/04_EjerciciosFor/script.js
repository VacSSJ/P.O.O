function Verificar(){
    let numeroMayor = parseInt(prompt("Ingrese el numero: "))
    let array = []
    for(let i = 2; i <= 5; i++){
        let numero = parseInt(prompt("Ingrese el numero " + i + ":"))
        array.push(numero)
        if (numero > numeroMayor)
        numeroMayor = numero
    }
document.getElementById(`lista`).innerHTML = `<h2>${array}  el numero mayor es: ${numeroMayor}</h2>`
}