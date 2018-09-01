const rp = require('request-promise');

const toDoRequest = (options) => rp(options)
    .then(req => {
        let res = req;
        return res;
    });

const getPosts = async (res, options) => {
    let data = await toDoRequest(options);
    
    res.send(JSON.stringify(data, true));
}

exports.getPosts = getPosts;
