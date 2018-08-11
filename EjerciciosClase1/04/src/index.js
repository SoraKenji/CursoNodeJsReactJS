try{
    if(process.argv.length < 3 || process.argv.length > 4){
        throw "Solo puedes ingresar un numero para calcular la funcion factorial de éste";
    }
    let factorial = 1;
    for(let i = 1; i <= process.argv[2];i++){
        factorial *= i;
    }

    console.log(`El factorial de ${process.argv[2]} es ${factorial}`);
}catch(err){
    console.log(err);
}