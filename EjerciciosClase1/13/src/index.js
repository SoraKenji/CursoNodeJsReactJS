try{
    if(process.argv.length < 2 || process.argv.length < 3){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let palabrasLength = palabras.length;
   
    console.log(palabras[0]);
    console.log(palabras[palabrasLength-1]);
}catch (err){
    console.log(err);
}