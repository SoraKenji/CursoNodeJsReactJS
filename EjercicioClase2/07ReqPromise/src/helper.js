const request = require('request');

const urlBase = 'https://jsonplaceholder.typicode.com';

const makeRequest = (mid) => {
    request(`${urlBase}/${mid}`);
};

exports.makeRequest = makeRequest;
