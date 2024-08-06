const express = require('express');
const app = express();

// full syntax
// app.get('/', (req, res, next) => {})


// set view engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    // send text
    // res.status(500).send("Hi");

    // send json
    // res.status(500).json({message: "error"});

    // send file
    // res.download('server.js');

    // render html (needs view engine)
    res.render('index', { text: 'World'});
});

const userRouter = require('./routes/users.js');

app.use('/users', userRouter);

app.listen(3000);