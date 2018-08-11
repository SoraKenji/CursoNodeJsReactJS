try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    
    var moment = require('moment');
    let fecha = moment(process.argv[2], 'DD-MM-YYYY', true);
    console.log(fecha);
    if (moment(fecha, 'DD-MM-YYYY').isValid()) {
        console.log("Es una fecha");
        
    } else {
        console.log("No es una fecha");
    }
}catch (err){
    console.log(err);
}