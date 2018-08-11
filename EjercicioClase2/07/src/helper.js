const request = require('request');

const searchPosts = (idPost) => {
    request(`https://jsonplaceholder.typicode.com/posts/${idPost}`, (err, res, body) => {  
        let json = JSON.parse(body);
        return json;
    }
);

const searchComments = (idComment) => request('https://jsonplaceholder.typicode.com/comments/' + idComment, 
    (err, res, body) => {  
        let json = JSON.parse(body);
        return json;
    }
);

const searchAlbums = (idAlumbs) => request('https://jsonplaceholder.typicode.com/albums/' + idAlumbs, 
    (err, res, body) => {  
        let json = JSON.parse(body);
        return json;
    }
);

const searchPhotos = (idPhotos) => request('https://jsonplaceholder.typicode.com/photos/' + idPhotos, 
    (err, res, body) => {  
        let json = JSON.parse(body);
        return json;
    }
);

const searchTodo = (idTodo) => request('https://jsonplaceholder.typicode.com/todos/' + idTodo, 
    (err, res, body) => {  
        let json = JSON.parse(body);
        return json;
    }
);

const searchUser = (idUser) => request('https://jsonplaceholder.typicode.com/users/' + idUser, 
    (err, res, body) => {  
        let json = JSON.parse(body);
        return json;
    }
);

exports.searchPosts = searchPosts;
exports.searchComments = searchComments;
exports.searchAlbums = searchAlbums;
exports.searchPhotos = searchPhotos;
exports.searchTodo = searchTodo;
exports.searchUser = searchUser;