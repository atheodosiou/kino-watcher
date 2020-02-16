const mongoose = require('mongoose');

const addOnSchema = new mongoose.Schema({
    amount:Number,
    gameType:String
});

const wagerStatisticsSchema = new mongoose.Schema({
    columns:Number,
    wagers:Number,
    addOn:[addOnSchema]
});

const prizeCategoriesSchema = new mongoose.Schema({
    id:Number,
    divident:Number,
    winners:Number,
    distributed:Number,
    jackpot:Number,
    fixed:Number,
    categoryType:Number,
    gameType:String
});

//
const columnNumbersSchema = new mongoose.Schema({
    1:[Number],
    2:[Number],
    3:[Number],
    4:[Number],
    5:[Number],
    6:[Number],
    7:[Number],
    8:[Number],
    9:[Number],
    10:[Number],
});

//

const sidebetsSchema = new mongoose.Schema({
    evenNumbersCount:Number,
    oddNumbersCount:Number,
    winningColumn:Number,
    winningParity:String,
    oddNumbers:[Number],
    evenNumbers:[Number],
    columnNumbers:{type:columnNumbersSchema}
});


//
const winningNumbersSchema = new mongoose.Schema({
    list:[Number],
    bonus:[Number],
    sidebets:{type:sidebetsSchema}
});


//


//
const pricePointsSchema = new mongoose.Schema({
    addOn:[addOnSchema],
    amount:Number
});

//
const lastOrActiveSchema = new mongoose.Schema({
    gameId:Number,
    drawId:Number,
    drawTime:Number,
    status:String,
    drawBreak:Number,
    visualDraw:Number,
    pricePoints:{type:pricePointsSchema},
    winningNumbers:{type:winningNumbersSchema},
    prizeCategories:[prizeCategoriesSchema],
    wagerStatistics:{type:wagerStatisticsSchema}
});

const lastAndActiveSchema = new mongoose.Schema({
    last:{type:lastOrActiveSchema},
    active:{type:lastOrActiveSchema}
});

const KinoModel = new mongoose.model('LastAndActive',lastAndActiveSchema);

//=====================================================================================================================================
module.exports={
    lastAndActiveSchema,
    KinoModel
}