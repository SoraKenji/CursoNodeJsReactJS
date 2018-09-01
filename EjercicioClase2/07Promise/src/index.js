import helper from './helper';
import * as fs from 'fs';

let argumento1 = process.argv[2];

let argumento2 = "";

if(process.argv.length >= 4){
    argumento2 = process.argv[3];
}

switch(argumento1){
    case "posts":
    helper.makeRequest("posts/" + argumento2)
    .then(post => {
        let resPost = post;
        helper.makeRequest("users/" +  + post.userId)
        .then(userz => {
            let userPost = userz;
            resPost.user = userPost;
            console.log(resPost);
        })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })
        break;
    case "9":
        helper.makeRequest("users/").then(userz => {
            console.log(userz);
        })
        .catch(err => {
            console.log(err);
        })
        break;
    case "10":
        helper.makeRequest("posts/").then(postz => {  
            let posts = postz;
            console.log(posts);
        })
        .catch(err => {
            console.log(err);
        });
        break;
    case "11":
        helper.makeRequest("posts/")
        .then(postz => {  
            let post = postz;
            helper.makeRequest("users/")
            .then(userPostz => {  
                let userPost = userPostz;
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
            .catch(err => {
                console.log(err);
            }) 
        })
        .catch(err => {
            console.log(err);
        })
        break;
}

