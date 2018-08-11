import helper from './helper';
const _ = require('lodash');
const request = require('request');

let argumento1 = process.argv[2];

let argumento2 = "";

if(process.argv.length >= 4){
    argumento2 = process.argv[3];
}

switch(argumento1){
    case "posts":
        request('https://jsonplaceholder.typicode.com/posts/' + argumento2, 
            function(err, res, body) {  
                let post = JSON.parse(body);

                request('https://jsonplaceholder.typicode.com/users/' + post.userId, 
                    function(err, res, body) {  
                        let userPost = JSON.parse(body);
                        post.user = userPost;
                        console.log(post);
                    }
                );
            }
        );
        break;
    case "comments":
        request('https://jsonplaceholder.typicode.com/comments/' + argumento2, 
            function(err, res, body) {  
                let comment = JSON.parse(body);
                request('https://jsonplaceholder.typicode.com/posts/' + comment.postId, 
                    function(err, res, body) {  
                        let postComment = JSON.parse(body);
                        request('https://jsonplaceholder.typicode.com/users/' + postComment.userId, 
                            function(err, res, body) {  
                                let userPost = JSON.parse(body);
                                postComment.user = userPost;
                                comment.post = postComment;
                                console.log(comment);
                            }
                        );
                    }
                );
            }
        );
        break;
    case "albums":
        
        break;
}