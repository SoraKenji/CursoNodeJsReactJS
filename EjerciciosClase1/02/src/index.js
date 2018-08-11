try{
    if(process.argv.length <= 3){
        throw "Muy pocos parametros para hacer promedio";
    }

    let min = process.argv[2];
    for(let i = 3; i < process.argv.length;i++){
        if(min > process.argv[i]){
            min = parseFloat(process.argv[i]);
        }
    }

    console.log(`El numero menor es ${min}`);
}catch(err){
    console.log(err);
}