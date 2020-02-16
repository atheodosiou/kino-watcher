const {getData,connectToDb} = require('./utils/functions');
const {logger} =require('./utils/logger');
const cron = require('node-cron');
require('dotenv').config();


module.exports.app = async function () {
    logger.info('Trying to connect to db...')
    try {
        await connectToDb(process.env.DB_URI);
        logger.info('Connected to db! Waiting for the first call...')
        cron.schedule('* * * * *', getData); //*/5 9-23 * * 1-5'
      } catch (error) {
        logger.error('==ERROR=='+JSON.stringify(error,null,2));
      }
};