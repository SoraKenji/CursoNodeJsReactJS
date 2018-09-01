import * as fs from 'fs';

const rp = require('request-promise');
const urlBase = 'https://jsonplaceholder.typicode.com';

const toDoRequest = (options) => rp(options)
    .then(req => {
        let res = req;
        return res;
    })
    .catch(err => {
        console.log(err);
    });


const postsRequest = async (argumento2) => {
    var options_01 = {
        uri: `${urlBase}/posts/${argumento2}`,
        json: true // Automatically parses the JSON string in the response
    };
    let postResponse = await toDoRequest(options_01);
    var options_02 = {
        uri: `${urlBase}/users/${postResponse.userId}`,
        json: true // Automatically parses the JSON string in the response
    };
    let postFinally  = await toDoRequest(options_02);
    postResponse.user = postFinally;
    console.log(postResponse);
}

const nineERequest = async (argumento2) => {
    var options_01 = {
        uri: `${urlBase}/users/${argumento2}`,
        json: true // Automatically parses the JSON string in the response
    };
    let nineResponse = await toDoRequest(options_01);
    
    console.log(nineResponse);
}

const tenERequest = async () => {
    var options_01 = {
        uri: `${urlBase}/posts`,
        json: true // Automatically parses the JSON string in the response
    };
    let tenResponse = await toDoRequest(options_01);
    
    console.log(tenResponse);
}

const elevenERequest = async (argumento2) => {
    var options_01 = {
        uri: `${urlBase}/posts/${argumento2}`,
        json: true // Automatically parses the JSON string in the response
    };
    let elevenResponse = await toDoRequest(options_01);
    var options_02 = {
        uri: `${urlBase}/users/`,
        json: true // Automatically parses the JSON string in the response
    };

    let elevenSecondResponse = await toDoRequest(options_02);

    elevenResponse.forEach(element => {
        let user;
        elevenSecondResponse.forEach(user_element => {
            if(element.userId == user_element.id)
                user = user_element;
        });
        element.user = user;
    });
    fs.writeFile("nombreArchivo.txt", JSON.stringify(elevenResponse), { flag: 'w' }, (err) => {
        if (err) {
            throw err;
        }
        console.log("guardado");
    });
    console.log(elevenResponse);
}

exports.postsRequest = postsRequest;
exports.nineERequest = nineERequest;
exports.tenERequest = tenERequest;
exports.elevenERequest = elevenERequest;
