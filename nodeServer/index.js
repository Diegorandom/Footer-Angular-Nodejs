const express = require('express');
const app = express();
//const router = require('./routing/routers');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const jsonSearcher = require('../nodeServer/JsonSearcher');

app.set('port', process.env.PORT || 8000);
console.log('\n Node app is running on port', app.get('port'));

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) =>{
    res.send('hello from node server')
});

//app.use(router);

app.post('/signup', (req, res) => {
    console.log(req.body);
    let rawdata = fs.readFileSync('userFile.json');
    let usersJson = JSON.parse(rawdata);

    jsonSearcher(usersJson, req.body.email, true);
    
    var userJSON = JSON.stringify(req.body);
    fs.writeFile("userFile.json", userJSON, 'utf8', (err) =>{
        if(err){console.log("error while saving user data", err)}
        res.send("we got the signup data")
    })
})

app.listen(app.get('port'), () => {
    console.log('Server started')
})