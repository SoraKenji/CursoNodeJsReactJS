const request = require('request');

import helper from './helper';
import * as fs from 'fs';
import * as readline from 'readline'; 
import { resolve } from 'url';

let argumento1 = process.argv[2];

let argumento2 = "";
const urlBase = 'https://jsonplaceholder.typicode.com';

if(process.argv.length >= 4){
    argumento2 = process.argv[3];
}

switch(argumento1){
    case "posts":
        helper.postsRequest(argumento2);
        break;
    case "9":
        helper.nineERequest(argumento2);
        break;
    case "10":
        helper.tenERequest(argumento2);
        break;
    case "11":
        helper.elevenERequest(argumento2);
        break;
}

