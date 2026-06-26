const express = require('express');
const app = express();
const db = require('./db');
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
app.listen(3000, () => {
    console.log('Listening on port 3000');
});