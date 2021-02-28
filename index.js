const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
let reqJSON;

//app.use(express.static(path.join(__dirname, )))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3021, () => {
    console.log('magic happens at port 3021, offcourse');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static/index.html'))
})

app.post('/', (req, res) => {
    let reqJSON = req.body;
    printJSON(reqJSON);
    reqJSON = JSON.stringify(req.body);
    console.log('------------------------------------');
    console.log(`Je stuurde dit naar de server: ${reqJSON}`);
    res.end(`gelukt!!`);
})

function printJSON(reqOBJ) {
    console.log('------------------------------------');
    for (let [key, entry] of Object.entries(reqOBJ)) {
        if (typeof entry === 'object') {
            console.log(key + ': ');
            for (let [ke, en] in Object.entries(entry)) {
                for (let i = 0; i < Object.keys(entry[ke]).length; i++) {
                    console.log(Object.keys(entry[ke])[i] + ': ' + Object.values(entry[ke])[i]);
                }
            }
        } else {
            console.log(key + ': ' + entry);
        }
    }
}