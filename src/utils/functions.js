const axios = require('axios');
const mongoose = require('mongoose');
const {KinoModel} =require('../models/last-and-active.model');
const {logger} = require('./logger');
const {createMessage} = require('./create-messages');

const getData = async function(){
    logger.info(createMessage('Getting data from opap...'))
    try{
        const {data} = await axios.get(process.env.API_URI);
        const model = new KinoModel(data);
        await model.save();

        logger.info(createMessage('Data saved successfully! Waiting for the next call...'));
    }catch(error){
        logger.error(createMessage(JSON.stringify(error,null,2)));
    }
};

const connectToDb = async function(dbUri){
    return mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true});
};

module.exports={
    getData,
    connectToDb
}