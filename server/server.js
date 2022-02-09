const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

let PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running at (http://localhost:${PORT})`);
});

async function getData(x, y, token) {

    var config = {
        method: 'get',
        url: 'http://django-server.eba-fxx3p9xj.us-west-2.elasticbeanstalk.com/api/test_detailed_grid/',
        headers: {
            Authorization: token,
            x: Number(x),
            y: Number(y)
        }
    };

    var data;
    await axios(config).then((res) => {
        data = res.data;
    });

    return data;
}


app.get('/data', async function (req, res) {
    let x = req.headers.x;
    let y = req.headers.y;
    let token = req.headers.authorization;
    var responseData = {};
    try {
        responseData = await getData(x, y, token);
    } catch (error) {
        if(error) {
            responseData["error"] = "Server Error!";
        }
    }
    res.send(responseData);
});
