const mongoose=require('mongoose')
//create match schema
const userSchema=mongoose.Schema({
    //atr: type
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    role:String,
    avatar:String
})
//affect model name to Schema
const user = mongoose.model("user",userSchema)
//make match importable
module.exports=user;