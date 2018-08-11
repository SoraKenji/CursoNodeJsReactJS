import * as fs from 'fs';
import * as readline from 'readline'; 

let arrayMaxLength = 0;
let stringMasLargo = "";

const lineReader = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

lineReader.on('line', (line) => {
    let arreglo = Array.from(line);
    if(arrayMaxLength < arreglo.length){
        arrayMaxLength = arreglo.length;
        stringMasLargo = line;
    }
});

lineReader.on('close', (line) => {
    console.log(stringMasLargo);
});
