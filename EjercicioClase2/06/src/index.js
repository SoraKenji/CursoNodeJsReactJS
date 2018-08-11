import * as fs from 'fs';
import * as readline from 'readline'; 

const lineReader = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

lineReader.on('line', (line) => {
    let arreglo = JSON.parse(line);
    console.log(arreglo["nombre"]);
});
