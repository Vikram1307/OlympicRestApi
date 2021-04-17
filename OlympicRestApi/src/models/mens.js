
const  mongoose  = require('mongoose');

const menSchema = new mongoose.Schema({
    Ranking :{
        type :Number,
        required : true,
        unique: true
    },
    Name: {
        type : String,
        required : true,
        trim :true
    },
    DOB: {
        type : String,
        required : true,
        trim :true
    },
    Country: {
        type : String,
        required : true,
        trim :true
    },
    Score: {
        type : Number,
        required : true,
        trim :true
    },
    Event: {
        type : String,
       default : '100m'
       
    },
})
//we are creating a new connection
const MensRanking = new mongoose.model('MenRanking', menSchema)

module.exports = MensRanking;