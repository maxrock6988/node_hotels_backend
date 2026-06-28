const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport=require('./auth');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body



const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()} Request Made to:${req.originalUrl}]`);
    next();
}


app.use(logRequest);


//Initialize Passport
app.use(passport.initialize());

const LocalAuthMiddleware=passport.authenticate('local',{session:false})

// Home Route
app.get('/', logRequest, (req, res) => {
    res.send('Welcome to my hotel');
});

//import router
const personRoutes = require("./routes/personRoutes");
app.use('/person',LocalAuthMiddleware, personRoutes)

//import router
const menuRoutes = require("./routes/menuRoutes");
app.use('/menuItem',LocalAuthMiddleware, menuRoutes)

// Start Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000');
});