//inport express  module
//heroku
const express = require("express")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const multer = require('multer')
const path = require('path')
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
const secretKey = 'key';
app.use(session({
    secret: secretKey,
}));

//multer configuration
app.use('/shortcut', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
}
const storageConfing = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/images')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
})
    ;
//models importation
const Match = require("./models/match")
const Player = require("./models/player")
const Team = require("./models/team");
const User = require("./models/user");
const team = require("./models/team")
const player = require("./models/player")




let teamsTab = [
    { id: 1, name: 'fcb', owner: 'maldini', foundation: 5000 },
    { id: 2, name: 'jvs', owner: 'kai', foundation: 2070 },
    { id: 3, name: 'fcb', owner: 'roberto', foundation: 1950 }]
let matchesTab = [
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
    console.log("add match ", req.body)
    let match = new Match(req.body)
    match.save()
    res.json({ isAdded: true })
})
//edit match 
app.put("/matches", (req, res) => {
    console.log("edit match  ", req.body)
    let newMatch = req.body
    match.updateOne({ _id: req.body._id }, newMatch).then(
        (result) => {
            console.log("here is respense after edit", result)
            if (result.nModified == 1) {
                res.json({ msg: 'ok' })
            }
            else {
                res.json({ msg: 'error' })
            }

        }
    )
    res.json({ msg: 'ok' })
})
//get all matches  
app.get("/matches", (req, res) => {
    console.log("get all matches ")
    Match.find().then((docs) => {
        res.json({ T: docs })
    })
})
//get matche by id
app.get("/matches/:id", (req, res) => {
    let matchId = req.params.id
    match.findById(matchId).then(
        (docs) => { res.json({ match: docs }) }
    )
})
// delete match by id
app.delete("/matches/:id", (req, res) => {
    console.log("delete match by id ", req.params.id)
    let matchId = req.params.id
    match.deleteOne({ _id: matchId }).then(
        (result) => {
            console.log("here result after delete", result)
            if (result.deletedCount == 1) {
                res.json({ isDeleted: true })
            }
            else {
                res.json({ isDeleted: false })
            }
        }
    )
})
//search match
app.get("/matches/:scoreOne/:scoreTwo", (req, res) => {
    console.log("hhhhhhh", req.body)
})
//bussines logick 2
app.post("/teams", (req, res) => {
    console.log("add team ", req.body)
    let team = new Team(req.body)
    team.save()
    res.json({ isAdded: true })
})
app.get("/teams", (req, res) => {
    console.log("get all matches ")
    Team.find().populate("players").then(
        (docs) => {
            res.json({ T: docs })
        })
})
app.delete("/teams/:id", (req, res) => {
    console.log("delete team by id ", req.params.id)
    let teamId = req.params.id
    team.deleteOne({ _id: teamId }).then(
        (result) => {
            console.log("here result after delete", result)
            if (result.deletedCount == 1) {
                res.json({ isDeleted: true })
            }
            else {
                res.json({ isDeleted: false })
            }
        }
    )
})
app.post("/teams", (req, res) => {
    console.log("add team ", req.body)
    let team = req.body
    teamsTab.push(team)
    res.json({ isAdded: true })
})
app.get("/teams/:id", (req, res) => {
    let teamId = req.params.id
    team.findById(teamId).then(
        (docs) => { res.json({ team: docs }) }
    )
})
//bussines logick 3
app.post("/players", (req, res) => {
    console.log("add player", req.body)
    Team.findById(req.body.teamId).then(
        (team) => {
            if (!team) {
                res.json({ isAdded: "team not found" })
            }
            else {
                let player = new Player({
                    name: req.body.name,
                    age: req.body.age,
                    potition: req.body.potition,
                    tId: team._id
                })
                player.save(
                    //err => error
                    //savedPlayer => success (object+_id) 
                    (err, saverPlayer) => {
                        if (err) {
                            res.json({ isAdded: "player not saved" })
                        }
                        else {
                            //add player id into players attribute (team)
                            team.players.push(saverPlayer._id);
                            //update players attribute in team
                            team.save();
                            //send json response to FE
                            res.json({ isAdded: "player added" });
                        }
                    }
                )
            }
        }
    )
})
app.get("/players", (req, res) => {
    console.log("get all matches ")
    Player.find().then((docs) => {
        res.json({ T: docs })
    })
})
app.delete("/players/:id", (req, res) => {
    console.log("delete player by id ", req.params.id)
    let playerId = req.params.id
    player.deleteOne({ _id: playerId }).then(
        (result) => {
            console.log("here result after delete", result)
            if (result.deletedCount == 1) {
                res.json({ isDeleted: true })
            }
            else {
                res.json({ isDeleted: false })
            }
        }
    )
})
app.post("/players", (req, res) => {
    console.log("add player ", req.body)
    let player = req.body
    matchesTab.push(player)
    res.json({ isAdded: true })
})
app.get("/players/:id", (req, res) => {
    let playerId = req.params.id
    player.findById(playerId).then(
        (docs) => { console.log("here is the respense :", docs), res.json({ player: docs }) }
    )
})





app.get("/matches/:scoreOne/:scoreTwo", (req, res) => {
    let match = matchesTab.filter((elt) => elt.scoreOne == req.params.scoreOne && elt.scoreTwo == req.params.scoreTwo)
    res.json({ match: match })
    console.log("here", match)
})
//bussines logick 4(users)
app.get("/users", (req, res) => {
    console.log("get all users ")
    user.find().then((docs) => {
        res.json({ T: docs })
    })
})
//signup
app.post("/users", multer({ storage: storageConfing }).single('img'), (req, res) => {
    console.log("add user ", req.body)
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            if (!doc) {
                bcrypt.hash(req.body.password, 10).then(
                    (cryptedPwd) => {
                        req.body.password = cryptedPwd
                        if (!req.file) {
                            req.body.avatar = `http://localhost:3000/shortcut/avatar.jpg`
                        }
                        else{
                        req.body.avatar = `http://localhost:3000/shortcut/${req.file.filename}`
                         }
                        let user = new User(req.body)
                        user.save()
                        res.json({ isAdded: true })

                    }
                )

            }
            else {
                res.json({ isAdded: false })
            }
        }
    )

})
//login
app.post('/users/login', (req, res) => {
    console.log("here is user:", req.body)
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            console.log("here doc", doc)
            if (!doc) {
                res.json({ msg: "email does't exist" })
            }
            else {
                bcrypt.compare(req.body.password, doc.password).then(
                    (result) => {
                        if (result) {
                            let userToSend = {
                                id: doc._id,
                                fName: doc.firstName,
                                lName: doc.lastName,
                                role: doc.role,
                                image:doc.avatar
                            }
                            //encoder token
                            let token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' })
                            console.log("here token", token)
                            res.json({ msg: "welcome", user: token })
                        }
                        else {
                            res.json({ msg: "wrong password" })
                        }
                    }
                )
            }
        }
    )
})


//make app exportable
module.exports = app;


