let calculodeFactorial = (a) => {
    let factorial = 1;
    for(let i = 1; i <= a;i++){
        factorial *= i;
    }
    return factorial;
}
let calculodePotencia = (bas, exp) => {
    let potencia = 1;
    let pos = true;
    let base = bas;
    let exponente = exp;
    if(exponente == 0)
        return potencia;

    if(exponente < 0){
        pos = false;
        exponente *= -1; 
    }
    for(let i = 1; i <= exponente; i++){
        potencia *= base; 
    }
    if(!pos)
        potencia = 1/potencia;

    return potencia;
}

exports.calculodePotencia = calculodePotencia;
exports.calculodeFactorial = calculodeFactorial;