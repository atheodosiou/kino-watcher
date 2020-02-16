const {getData,connectToDb} = require('./utils/functions');
const cron = require('node-cron');
require('dotenv').config();


module.exports.app = async function () {
    console.log('Trying to connect to db...')

    try {
        await connectToDb(process.env.DB_URI);
        console.log('Connected to db.\nWaiting for the first call.\n')
        cron.schedule('* * * * *', getData);
      } catch (error) {
        console.log('==ERROR==',error)
      }
};