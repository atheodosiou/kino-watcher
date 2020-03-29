const moment = require('moment');

module.exports.createMessage = function(msg){
    const message=`${moment().format('MMMM Do YYYY, h:mm:ss a')}: ${msg}`;
    console.log(message);
    return message;
};