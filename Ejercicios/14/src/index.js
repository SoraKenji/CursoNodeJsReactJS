try{
    if(process.argv.length < 2 || process.argv.length < 5){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let letter = process.argv[3];
    let replacefor = process.argv[4];
   
    console.log(palabras.split(letter).join(replacefor));
}catch (err){
    console.log(err);
}