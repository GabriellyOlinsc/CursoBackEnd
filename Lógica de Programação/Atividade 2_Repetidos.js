const elementoRepetido=[]
function repetir(elemento,cont){
    for (let i = 0; i < cont; i++) {
        elementoRepetido[i]= elemento
    }
    console.log(elementoRepetido)
} 
repetir("codigo",2)
repetir(7,3)