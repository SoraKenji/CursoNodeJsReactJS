try{
    if(process.argv.length <= 3){
        throw "Muy pocos parametros para hacer promedio";
    }
    let cont = process.argv.length;
    let suma = 0;
    
    for(let i = 2; i < process.argv.length; i++){
        suma += parseInt(process.argv[i]);
    }
    
    let promedio = suma / (cont-2);
    console.log(process.argv[0]);//npm(?)
    console.log(process.argv[1]);//start(?)
    console.log(`El promedio es ${promedio}`);
}catch (err){
    console.log(err);
}
