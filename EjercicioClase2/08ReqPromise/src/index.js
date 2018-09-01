import * as fs from 'fs';
import * as readline from 'readline'; 
const rp = require('request-promise');
import { PerformanceObserver } from 'perf_hooks';

const request = require('request');
let argumento1 = process.argv[2];
let nombreArchivo = process.argv[3];

let content = '';

const urlBase = 'https://jsonplaceholder.typicode.com';
const lineReader = readline.createInterface({
    input: fs.createReadStream(nombreArchivo),
});

rp(`${urlBase}/${argumento1}`)
.then(req => {
    let post = req;
    fs.writeFile(nombreArchivo, post, { flag: 'w' }, (err) => {
        if (err) {
            throw err;
        }
        console.log("guardado");
    });
});
