import fechaHelper from './helperFecha';
try{
    if(process.argv.length < 2){
        throw "Muy pocos parametros para hacer el comando";
    }
    
    var moment = require('moment');
    moment.locale("es");
    let fecha = moment(process.argv[2], 'DDMMYYYY');
    console.log(fecha);
    if (moment(fecha, 'DDMMYYYY').isValid()) {
        console.log("Es una fecha");
        console.log(moment(fecha, 'DDMMYYYY').format("LL"));
    } else {
        console.log("No es una fecha");
    }
    
}catch (err){
    console.log(err);
} 