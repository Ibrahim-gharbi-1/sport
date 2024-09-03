//inport express  module
const express = require("express")
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/sportDB')
//import body parser module
const bodyParser = require("body-parser")
//create express application
const app = express();



//app configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Security configuration

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader(

        'Access-Control-Allow-Headers',

        'Origin, Accept, Content-Type, X-Requested-with, Authorization'

    );

    res.setHeader(

        'Access-Control-Allow-Methods',

        'GET, POST, DELETE, OPTIONS, PATCH, PUT'

    );

    next();

});
//models importation
const Match=require("./models/match")

let teamsTab = [
    { id: 1, name: 'fcb', owner: 'maldini', foundation: 5000},
    { id: 2, name: 'jvs', owner: 'kai', foundation: 2070},
    { id: 3, name: 'fcb', owner: 'roberto', foundation:1950 }]
let matchesTab  = [
    { id: 1, scoreOne: 3, scoreTwo: 5, teamOne: 'fcb', teamTwo: 'jvs' },
    { id: 2, scoreOne: 8, scoreTwo: 2, teamOne: 'est', teamTwo: 'cab' },
    { id: 3, scoreOne: 1, scoreTwo: 6, teamOne: 'aa', teamTwo: 'bb' }]
let playersTab = [
    { id: 1, name: 'cristiano', age: 50, position: 'atk', nbr: 7 },
    { id: 2, name: 'neymar', age: 20, position: 'cb', nbr: 10 },
    { id: 3, name: 'pele', age: 60, position: 'cmf', nbr: 20 }]
//business logic 1
//add match 
app.post("/matches", (req, res) => {
    console.log("add match ",req.body)
    let match=req.body
    matchesTab.push(match)
    res.json({isAdded:true})
})
//edit match 
app.put("/matches", (req, res) => {
    console.log("edit match  ",req.body)
    let newMatch=req.body
    let pos=matchesTab.findIndex((elt)=>elt.id==newMatch.id)
    matchesTab[pos]=newMatch
    res.json({msg:'ok'})
})
//get all matches  
app.get("/matches", (req, res) => {
    console.log("get all matches ")
    res.json({ T: matchesTab })
})
//get matche by id
app.get("/matches/:id", (req, res) => {
    let matchId=req.params.id
    let match=matchesTab.find((elt)=>elt.id==matchId)
    console.log(" matche",match)
    res.json({match:match})
})
// delete match by id
app.delete("/matches/:id", (req, res) => {
    console.log("delete match by id ",req.params.id)
    let matchId=req.params.id
    let pos=matchesTab.findIndex((elt)=>elt.id==matchId)
    matchesTab.splice(pos,1)
    res.json({isDeleted:true})
})
//search match
app.get("/matches/:scoreOne/:scoreTwo", (req, res) => {
   console.log("hhhhhhh",req.body)
})
//bussines logick 2
app.get("/teams", (req, res) => {
    console.log("get all matches ")
    res.json({ T: teamsTab })
})
app.delete("/teams/:id", (req, res) => {
    console.log("delete team by id ",req.params.id)
    let teamId=req.params.id
    let pos=matchesTab.findIndex((elt)=>elt.id==teamId)
    teamsTab.splice(pos,1)
    res.json({isDeleted:true})
})
app.post("/teams", (req, res) => {
    console.log("add team ",req.body)
    let team=req.body
    teamsTab.push(team)
    res.json({isAdded:true})
})
app.get("/teams/:id", (req, res) => {
    let teamId=req.params.id
    let team=teamsTab.find((elt)=>elt.id==teamId)
    console.log(" team",team)
    res.json({team:team})
})
//bussines logick 3
app.get("/players", (req, res) => {
    console.log("get all players ")
    res.json({ T: playersTab })
})
app.delete("/players/:id", (req, res) => {
    console.log("delete player by id ",req.params.id)
    let playerId=req.params.id
    let pos=matchesTab.findIndex((elt)=>elt.id==playerId)
    playersTab.splice(pos,1)
    res.json({isDeleted:true})
})
app.post("/players", (req, res) => {
    console.log("add player ",req.body)
    let player=req.body
    matchesTab.push(player)
    res.json({isAdded:true})
})
app.get("/players/:id", (req, res) => {
    let playerId=req.params.id
    let player=playersTab.find((elt)=>elt.id==playerId)
    console.log("player",player)
    res.json({player:player})
})





app.get("/matches/:scoreOne/:scoreTwo",(req,res) => {
    let match=matchesTab.filter((elt)=>elt.scoreOne==req.params.scoreOne&&elt.scoreTwo==req.params.scoreTwo)
    res.json({match:match})
    console.log("here",match)
})






//make app exportable
module.exports = app;


