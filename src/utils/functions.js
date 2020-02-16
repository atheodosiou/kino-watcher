const axios = require('axios');
const mongoose = require('mongoose');
const {KinoModel} =require('../models/last-and-active.model');

const getData = async function(){
    console.log('Getting data from opap...');
    const {data} = await axios.get(process.env.API_URI);
    const model = new KinoModel(data);
    
    try{
        await model.save();
        console.log('Data saved successfully!\nWaiting for the next call...\n')
    }catch(error){
        console.log('Error while saving the data to db!', error)
    }
};

const connectToDb = async function(dbUri){
    return mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true});
};

module.exports={
    getData,
    connectToDb
}