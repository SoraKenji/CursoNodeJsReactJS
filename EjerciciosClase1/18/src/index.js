try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let subOPre = process.argv[2];
    let palabras = process.argv[3];

    let prefijo = palabras.substring(0, subOPre.length);
    let coincidencia = false;

    if(prefijo == subOPre){
        coincidencia = true;
        console.log(`La palabra ${subOPre} es prefijo de ${palabras}`);
    }

    if(sufijo == subOPre){
        coincidencia = true;
        console.log(`La palabra ${subOPre} es prefijo de ${palabras}`);
    }
    if(!coincidencia){
        console.log("Nada");
    }
    
}catch (err){
    console.log(err);
}