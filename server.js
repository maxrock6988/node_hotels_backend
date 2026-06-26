const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to my hotel');
});



//import router
const personRoutes = require("./routes/personRoutes");
app.use('/person',personRoutes)

//import router
const menuRoutes = require("./routes/menuRoutes");
app.use('/menuItem',menuRoutes)

// Start Server
const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000');
});