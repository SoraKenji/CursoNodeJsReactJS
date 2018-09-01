import * as fs from 'fs';
import * as readline from 'readline'; 
import { get } from "request";

const request = require('request');
let argumento1 = process.argv[2];
let nombreArchivo = process.argv[3];

let content = '';

const urlBase = 'https://jsonplaceholder.typicode.com';
const lineReader = readline.createInterface({
    input: fs.createReadStream(nombreArchivo),
});

const makeRequest = (mid) => {
    return new Promise((resolve, reject)=>{
        let opt = {
            url:`${urlBase}/${mid}`
        };
        get(opt, (err,res,body)=>{
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve(body);
            }
        })
    })
};

makeRequest(`${urlBase}/${argumento1}`).then(req => {
    let post = req;
    fs.writeFile(nombreArchivo, JSON.stringify(post), { flag: 'w' }, (err) => {
        if (err) {
            throw err;
        }
        console.log("guardado");
    });
});