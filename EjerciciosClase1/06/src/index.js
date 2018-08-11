import MyMath from './MyMath';

try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer promedio";
    }
    console.log(process.argv[2]);
    if (process.argv[2] == "e"){
        let expE = 0;

        for(let i = 0; i < 20 ; i++){
            let underFactorial = 1 / MyMath.calculodeFactorial(i);
            expE +=underFactorial; 
        }

        console.log(`La expresion e es igual a ${expE}`);
    }else if(process.argv[2] == "pi"){
        let pi = 0;

        for(let i = 0; i< 100000; i++){
            pi += MyMath.calculodePotencia(-1, i) / ((2*i)+1);
        }
        pi = 4 * pi;
        console.log(`La expresion pi es igual a ${pi}`);
    }
    else if(process.argv[2] == "ln"){
        let lgN = 0;
        let Mm = parseFloat(process.argv[3]);
        for(let i = 1; i<= 100; i++){
            lgN += (MyMath.calculodePotencia(-1, (i+1)) /i) * MyMath.calculodePotencia((Mm - 1),i);
        }
        console.log(`El logaritmo natural de ${Mm} es igual a ${lgN}`);
    }
}catch (err){
    console.log(err);
}
