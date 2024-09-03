const { Type } = require('@angular-devkit/build-angular');
const mongoose=require('mongoose')
//create match schema
const playerSchema=mongoose.Schema({
    //atr: type
    name:String,
    nbr:Number,
    age:Number,
    position:String,
    tId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team'//model name
    }
})
//affect model name to Schema
const player = mongoose.model("Player",playerSchema)
//make match importable
module.exports=player;