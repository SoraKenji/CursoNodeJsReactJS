import helper from './helper';

try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let cantidadVocales = helper.vowelFinder(palabras.toLowerCase()).length;
    let cantidadEspacios = helper.spaceFinder(palabras.toLowerCase()).length;
    let cantidadConsonantes = helper.consonantesFinder(palabras.toUpperCase()).length;

    console.log("vocales : " + cantidadVocales + ", consonantes : " 
    + cantidadConsonantes + ", espacios: " + cantidadEspacios);

    console.log();
}catch (err){
    console.log(err);
}