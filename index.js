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
    //res.end('Hi there!');
    //res.sendFile(path.resolve(__dirname, 'index.html'));
    res.end(`
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>test33</title>
            </head>

            <body>
                <h1>HALLOOOOOO</h1>
            </body>
        </html>
    `)
})

app.post('/', (req, res) => {
    //console.log(typeof req);
    //console.log(typeof req.body)
    let reqJSON = req.body;
    printJSON(reqJSON)
        //console.log('keys: ' + Object.keys(reqOBJ));
        //console.log('values: ' + Object.entries(reqOBJ));

    // for (let [k, e] of Object.entries(reqOBJ)) {
    //     //console.log(e);
    //     //console.log('typeof: ' + typeof e + ', lengte: ' + e.length);
    //     //console.log("undefined" + e.value);

    //     if (typeof e === 'object') {
    //         console.log(k + ': ');
    //         for (let [ke, en] in Object.entries(e)) {
    //             console.log(e[ke]);
    //         }
    //     } else {
    //         console.log(k + ': ' + e)
    //     }


    // }
    reqJSON = JSON.stringify(req.body);

    console.log(`Je stuurde dit naar de server: ${reqJSON}`);

    res.end(`gelukt!!`);
    //printJSON(reqObj);
})

function printJSON(reqOBJ) {
    for (let [k, e] of Object.entries(reqOBJ)) {
        //console.log(e);
        //console.log('typeof: ' + typeof e + ', lengte: ' + e.length);
        //console.log("undefined" + e.value);

        if (typeof e === 'object') {
            console.log(k + ': ');
            for (let [ke, en] in Object.entries(e)) {
                console.log(e[ke]);
            }
        } else {
            console.log(k + ': ' + e)
        }


    }

}