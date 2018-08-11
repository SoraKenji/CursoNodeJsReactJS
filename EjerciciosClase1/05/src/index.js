import myMath from '../../06/src/MyMath' 

try{
    if(process.argv.length < 3 || process.argv.length > 4){
        throw "Solo puedes ingresar dos numeros (base y exponente respectivamente) para calcular funcion potencia";
    }
    let potencia = 1;
    let base = parseFloat(process.argv[2]);
    let exponente = parseFloat(process.argv[3]);

    potencia = myMath.calculodePotencia(base, exponente);

    console.log(`La potencia de ${base} elevado ${exponente} es ${potencia}`);
}catch(err){
    console.log(err);
}