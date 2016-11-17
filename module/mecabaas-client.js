'use strict';

const request = require('request');
const promise = require('bluebird');
const apiBase = 'http://mecab.oracle.tokyo/api';

module.exports = class mecabaasClient {

    static parse(text){
        return new promise(function(resolve, reject){
            let headers = {
                'Content-Type': 'application/json'
            };
            let url = apiBase + '/parse?text=' + encodeURIComponent(text);
            request({
                url: url,
                method: 'GET',
                headers: headers,
                json: true,
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }
                if (typeof body == 'undefined' || response.statusCode != 200){
                    reject({message:'Failed to parse.'});
                    return;
                }
                resolve(body);
            });
        });
    }

    static wakachi(text){
        return new promise(function(resolve, reject){
            let headers = {
                'Content-Type': 'application/json'
            };
            let url = apiBase + '/wakachi?text=' + encodeURIComponent(text);
            request({
                url: url,
                method: 'GET',
                headers: headers,
                json: true,
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }
                if (typeof body == 'undefined' || response.statusCode != 200){
                    reject({message:'Failed to wakachi.'});
                    return;
                }
                resolve(body);
            });
        });
    }

};
