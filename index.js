const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3021, () => {
    console.log('magic happens at port 3021');
});

app.get('/', (req, res) => {
    //res.end('Hi there!');
    res.json({
        1: 'Hello',
    })
})

app.post('/', (req, res) => {
    let reqjson = JSON.stringify(req.body);
    console.log(reqjson);
    res.end('Je stuurde dit naar de server: ' + reqjson);
    //res.sendStatus(200);
})