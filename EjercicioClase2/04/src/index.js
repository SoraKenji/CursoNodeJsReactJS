import * as fs from 'fs';
import * as readline from 'readline'; 

const moment = require('moment');
//let fecha = moment(process.argv[2], 'DD-MM-YYYY', true);

const lineReader = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

lineReader.on('line', (line) => {
    if (moment(line, 'DD-MM-YYYY').isValid()) {
        console.log(line + " es una fecha valida");
    } else {
        console.log(line + " no es una fecha valida");
    }
});

