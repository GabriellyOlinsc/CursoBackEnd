
function receberPrimeiroEUltimoElemento(elementos){
    const primeiroElemento= elementos.shift()// ou [0]
    const ultimoElemento= elementos.pop() // ou [elementos.lenght-1]
    //return array (quantidade).fill('+').join('')
    return [primeiroElemento,ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([4,5,11,22,50]))