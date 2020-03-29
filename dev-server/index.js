const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('index.html');
});

app.use('/', express.static('./dist'));

// 起動
app.listen(80);
https.Server({
  key:  fs.readFileSync('./dev-server/keys/server.key'),
  cert: fs.readFileSync('./dev-server/keys/server.crt')
}, app).listen(443);

console.log('server start.');
