const mongoose=require('mongoose')
const { getTypeParameterOwner } = require('typescript')

//create match schema
const teamSchema=mongoose.Schema({
    //atr: type
    name:String,
    owner:String,
    foundation:Number,
    players:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Player'
        }
    ]
})
//affect model name to Schema
const team = mongoose.model("Team",teamSchema)
//make match importable
module.exports=team;