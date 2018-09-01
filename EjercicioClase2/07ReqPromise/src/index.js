const request = require('request');
const rp = require('request-promise');

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
        var options_01 = {
            uri: `${urlBase}/posts/${argumento2}`,
            json: true // Automatically parses the JSON string in the response
        };

        rp(options_01)
        .then(req => {
            let post = req;
            return post;
        }).then(post => {
            var options_02 = {
                uri: `${urlBase}/users/${post.userId}`,
                json: true // Automatically parses the JSON string in the response
            };
            rp(options_02)
            .then(userPost => {
                post.user = userPost;
                console.log(post);
            });
        });
        break;
    case "9":
        var options_01 = {
            uri: `${urlBase}/users/${argumento2}`,
            json: true // Automatically parses the JSON string in the response
        };

        rp(options_01)
        .then(req => {
            let users = req;
            console.log(users);
            return users;
        });
        break;
    case "10":
        var options_01 = {
            uri: `${urlBase}/posts`,
            json: true // Automatically parses the JSON string in the response
        };

        rp(options_01)
        .then(req => {
            let post = req;
            console.log(posts);
            return post;
        });
        break;
    case "11":
        var options_01 = {
            uri: `${urlBase}/posts/${argumento2}`,
            json: true // Automatically parses the JSON string in the response
        };

        rp(options_01)
        .then(req => {
            let post = req;
            return post;
        }).then(post => {
            var options_02 = {
                uri: `${urlBase}/users/`,
                json: true // Automatically parses the JSON string in the response
            };
            rp(options_02)
            .then(userPost => {
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
            });
        });
        break;
}