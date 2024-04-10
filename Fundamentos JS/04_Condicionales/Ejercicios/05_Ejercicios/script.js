function puntaje(){
    let puntuacion = parseInt(prompt(`Ingrese su puntuacion`))
    let resultado = ""
    if(puntuacion >= 90){
        resultado = (`<h2>${puntuacion} WoW exelente puntaje</h2>`)
    }
    else if(puntuacion >= 70 && puntuacion <= 89){
        resultado = (`<h2>${puntuacion} buen trabajo, sigue mejorando</h2>`)
    }
    else if(puntuacion < 70){
        resultado = (`<h2>${puntuacion} Necesitas mejorar</h2`)
    }
    else{
        resultado = (`Ingrese el valor valido`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}