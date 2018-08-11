try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer promedio";
    }
    let largoArgument = process.argv.length;
    let indiceMayor = 2;

    for(let i = 2; i < largoArgument;i++){
        if(i+1 < largoArgument){
            if(process.argv[i].length < process.argv[i+1].length){
                indiceMayor = i+1;
            }
        }
    }
    console.log(process.argv[indiceMayor]);
}catch (err){
    console.log(err);
}
