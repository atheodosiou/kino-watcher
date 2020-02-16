const moment = require('moment');

module.exports.createMessage = function(msg){
    return `${moment().format('MMMM Do YYYY, h:mm:ss a')}: ${msg}`;
};