function Suma(){
    let contador = 0
    let Array = []
    while(contador <= 10){
        Array.push(contador)
        Array.push("+")
        contador += 1 
    }
    document.getElementById("lista").innerHTML = `<h2>Numeros del 1 al 10: <br>${Array}</h2>`
}