//  this is a https web-server
const https = require('https');
const fs = require('fs');
const express = require('express');
// const startUp = require('./routes/startup');
const alive = require('./routes/alive');

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

app = express();

const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', alive)

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});
