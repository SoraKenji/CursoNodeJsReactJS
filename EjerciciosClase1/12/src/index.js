try{
    if(process.argv.length < 2 || process.argv.length < 5){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let indice1 = parseInt(process.argv[3]);
    let indice2 = parseInt(process.argv[4]);
    let palabrasLength = palabras.length;
    if(indice1 < 0 || indice1 >= palabrasLength || indice2 < 0 || indice2 >= palabrasLength){
        throw "Indice invalido";
    }
    if(indice1 > indice2){
        throw "Indice invalido";
    }
    console.log(palabras.substring(indice1, indice2));
}catch (err){
    console.log(err);
}