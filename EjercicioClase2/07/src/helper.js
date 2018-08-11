const request = require('request');

const urlBase = 'https://jsonplaceholder.typicode.com';

const makeRequest = (mid, fn) => {
    request(`${urlBase}/${mid}`, fn);
};

exports.makeRequest = makeRequest;
