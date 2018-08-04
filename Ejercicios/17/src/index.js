try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    let palabras = process.argv[2];
    let contadorInverso = palabras.length-1;
    let flag = true;
    for(let i = 0; i < palabras.length;i++){
        if(palabras[i] != palabras[contadorInverso]){
            flag = false;
            console.log("No es palindromo");
            break;
        }
        contadorInverso--;
    }
    if(flag == true)
        console.log("Es palindromo");
}catch (err){
    console.log(err);
}
