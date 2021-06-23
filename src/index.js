require('dotenv').config();
const express = require('express');
const bodyParser = require ('body-parser');
const http = require('http');

const router = require("./routes")

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.use(router);

http.createServer(app).listen(port, () => {
  console.log('Start server at port ' + port);
});
