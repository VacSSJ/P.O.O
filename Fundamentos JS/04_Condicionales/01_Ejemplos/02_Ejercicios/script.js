function temp(){
    let temperatura = prompt("Ingrese la temperatura actual")
    if(temperatura <= 0){
        ambiente = (`Hace frio`)
    }
    else if(temperatura >= 25)
    {
        ambiente = (`Hace calor`)
    }
    else if(temperatura > 0, temperatura <=25){
        ambiente = (`se siente agradable`)
    }
    document.getElementById(`lista`).innerHTML = ambiente
}