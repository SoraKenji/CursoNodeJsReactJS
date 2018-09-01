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
    helper.makeRequest("posts/" + argumento2).then(post => {
        let resPost = post;
        helper.makeRequest("users/" +  + post.userId).then(userz => {
            let userPost = userz;
            resPost.user = userPost;
            console.log(resPost);
        })
    })
        break;
    case "9":
        helper.makeRequest("users/").then(userz => {
            console.log(userz);
        })
        break;
    case "10":
        helper.makeRequest("posts/").then(postz => {  
            let posts = postz;
            console.log(posts);
        });
        break;
    case "11":
        helper.makeRequest("posts/", function(err, res, body) {  
            let post = JSON.parse(body);
            helper.makeRequest("users/", function(err, res, body) {  
                let userPost = JSON.parse(body);
                post.forEach(element => {
                    let user;
                    userPost.forEach(user_element => {
                        if(element.userId == user_element.id)
                            user = user_element;
                    });
                    element.user = user;
                });
                console.log(post);
                fs.writeFile("nombreArchivo.txt", JSON.stringify(post), { flag: 'w' }, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("guardado");
                });
            })
        })
        break;
}

