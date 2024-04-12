function NumeroPar(){
    let N = parseInt(prompt("Ingresa cuántos números pares quieres encontrar:"));
    let count = 0;
    let Array = []
    for (let i = 2; count < N; i += 2) {
        Array.push(i)
        count++;
    }
    document.getElementById("lista").innerHTML = Array
}