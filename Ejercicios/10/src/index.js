try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let arreglo = JSON.parse(process.argv[2]);
    arreglo.sort((a,b)=>{return a - b;});
    console.log(arreglo);
}catch (err){
    console.log(err);
}
