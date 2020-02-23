const {getData,connectToDb} = require('./utils/functions');
const {logger} =require('./utils/logger');
const cron = require('node-cron');
const {createMessage} = require('./utils/create-messages');
require('dotenv').config();


module.exports.app = async function () {
    logger.info(createMessage('Trying to connect to db...'));
    try {
        await connectToDb(process.env.DB_URI);
        logger.info(createMessage('Connected to db! Waiting for the first call...'))
        cron.schedule('*/5 9-23 * * *', getData);
      } catch (error) {
        logger.error(createMessage(JSON.stringify(error,null,2)));
      }
};