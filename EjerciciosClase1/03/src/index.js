try{
    if(process.argv.length <= 3){
        throw "Muy pocos parametros para hacer promedio";
    }
    let cantidadPar = 0;
    let cantidadImpar = 0;
    for(let i = 2; i < process.argv.length;i++){
        if(parseInt(process.argv[i]) % 2 == 0){
            cantidadPar++;
        }else{
            cantidadImpar++;
        }
    }

    console.log(`La cantidad de numeros pares es ${cantidadPar}\nLa cantidad de numeros impares es ${cantidadImpar}`);
}catch(err){
    console.log(err);
}