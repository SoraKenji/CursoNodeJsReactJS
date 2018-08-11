import * as fs from 'fs';
import * as readline from 'readline'; 
import { PerformanceObserver } from 'perf_hooks';

const request = require('request');
let argumento1 = process.argv[2];
let nombreArchivo = process.argv[3];

let content = '';

const lineReader = readline.createInterface({
    input: fs.createReadStream(nombreArchivo),
});

request(`https://jsonplaceholder.typicode.com/${argumento1}`, 
    function(err, res, body) {  
        let post = body;
        fs.writeFile(nombreArchivo, post, { flag: 'w' }, (err) => {
            if (err) {
                throw err;
            }
            console.log("guardado");
        });
    }
);
