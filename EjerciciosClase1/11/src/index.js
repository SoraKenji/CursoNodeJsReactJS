try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let indice = parseInt(process.argv[3]);
    let palabrasLength = palabras.length;
    if(indice < 0 || indice >= palabrasLength){
        throw "Indice invalido";
    }
    console.log(palabras[indice]);
}catch (err){
    console.log(err);
}
