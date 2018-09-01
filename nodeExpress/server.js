let helper = require('./helper/helper');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const urlBase = 'https://jsonplaceholder.typicode.com';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    if(Object.keys(req.query).length === 0){
        var options_01 = {
            uri: `${urlBase}/posts`,
            json: true
        };
        helper.getPosts(res, options_01);
    }else{
        let queryPart = req.query.userId;
        var options_01 = {
            uri: `${urlBase}/posts?userId=${queryPart}`,
            json: true
        };
        helper.getPosts(res, options_01);
    }
    
});

app.post('/posts', (req, res) => {
    console.log(req.body);
    var options_01 = {
        method: 'POST',
        uri: `${urlBase}/posts`,
        json: true,
        form: req.body
    };
    helper.getPosts(res, options_01);
});

app.put('/posts/:id', (req, res) => {
    let idPart = req.params.id; 
    var options_01 = {
        method: 'PUT',
        uri: `${urlBase}/posts/${idPart}`,
        json: true,
        form: req.body
    };
    helper.getPosts(res, options_01);
});

app.patch('/posts/:id', (req, res) => {
    let idPart = req.params.id; 
    var options_01 = {
        method: 'PATCH',
        uri: `${urlBase}/posts/${idPart}`,
        json: true,
        form: req.body
    };
    helper.getPosts(res, options_01);
});

app.delete('/posts/:id', (req, res) => {
    console.log("asdf");
    let idPart = req.params.id; 
    var options_01 = {
        method: 'DELETE',
        uri: `${urlBase}/posts/${idPart}`,
        resolveWithFullResponse: true,
        json: true
    };
    helper.getPosts(res, options_01);
});

app.get('/posts/:id', (req, res) => {
    let idPart = req.params.id; 
    var options_01 = {
        uri: `${urlBase}/posts/${idPart}`,
        json: true,
    };
    helper.getPosts(res, options_01);
});

app.get('/posts/:id/comments', (req, res) => {
    var options_01 = {
        uri: `${urlBase}/posts/${req.params.id}/comments`,
        json: true
    };
    helper.getPosts(res, options_01);
});

app.get('/comments', (req, res) => {
    let queryPart = req.query.postId;
    var options_01 = {
        uri: `${urlBase}/comments?postId=${queryPart}`,
        json: true
    };
    helper.getPosts(res, options_01);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});