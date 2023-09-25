// // http web server
// // Need to create secret key and certificate

// // const hostname = 'localhost';
// const port = 8080;
// const https = require('https');
// const express = require('express');
// app = express();

// const fs = require('fs');
// // 3 ways to get the certificate
// // 1. from public service
// // 2. certificate authority
// // 3. let's encrypt
// const httpsOptions = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };
// const server = https.createServer(app);

// app.get('/', (req, res) => {
//   res.send("Hello World")
// });

// server.listen(port, () => {
//   console.log(`HTTPS is running on port` + port + `...`);
// });


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
// app.use('/', startUp)
app.use('/', alive)

// app.get('/get-ip', (req,res) => {
//   const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
//   res.send({userIp});
// })

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});