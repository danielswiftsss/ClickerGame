const express = require('express');
const app = express();
const path = require('path');
const port = 5000; 

app.get('',(req, res) => {  res.sendFile(__dirname + '/views/index.html');})

app.listen(port, () => console.info('Listening on port ${port}'))

console.log('Running at Port 3000');