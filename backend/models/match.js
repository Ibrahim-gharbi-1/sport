//inport mongoose module
const mongoose=require('mongoose')

//create match schema
const matchschema=mongoose.Schema({
    //atr: type
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String
})
//affect model name to Schema
const match = mongoose.model("Match",matchschema)
//make match importable
module.exports=match;