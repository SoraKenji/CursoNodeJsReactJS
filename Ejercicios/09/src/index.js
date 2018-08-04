try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let arreglo = JSON.parse(process.argv[2]);
    let primerosX = parseInt(process.argv[3]);
    for(let i = 0; i < primerosX;i++){
       console.log(arreglo[i]);
    }
}catch (err){
    console.log(err);
}
