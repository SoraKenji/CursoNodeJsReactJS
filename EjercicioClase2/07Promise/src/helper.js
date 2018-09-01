import { get } from "request";

const urlBase = 'https://jsonplaceholder.typicode.com';

const makeRequest = (mid) => {
    return new Promise((resolve, reject)=>{
        let opt = {
            url:`${urlBase}/${mid}`,
            json:true
        };
        get(opt, (err,res,body)=>{
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve(body);
            }
        })
    })
};

exports.makeRequest = makeRequest;
