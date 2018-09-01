const rp = require('request-promise');

const toDoRequest = (options) => rp(options)
    .then(req => {
        let res = req;
        return res;
    });

const getPosts = async (res, options) => {
    try{
        let data = await toDoRequest(options);
        res.status(200).send(JSON.stringify(data, true));
    }catch(err){
        res.status(500).send();
    }
}

exports.getPosts = getPosts;
