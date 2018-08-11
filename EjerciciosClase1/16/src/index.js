import helper from '../../15/src/helper';

try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let cantidadVocalesMayusculas = helper.vowelMayFinder(palabras).length;
    let cantidadVocalesMin = helper.vowelMinFinder(palabras).length;
    let cantidadEspacios = helper.spaceFinder(palabras).length;
    let cantidadConsonantesMayusculas = helper.consonantesMayFinder(palabras).length;
    let cantidadConsonantesMin = helper.consonantesMinFinder(palabras).length;

    console.log("vocales Mayus : " + cantidadVocalesMayusculas 
    + ", vocales Minus : " + cantidadVocalesMin +", consonantes Mayus: " 
    + cantidadConsonantesMayusculas + ", consonantes Min: " + cantidadConsonantesMin
    + ", espacios:" + cantidadEspacios);

    console.log();
}catch (err){
    console.log(err);
}
