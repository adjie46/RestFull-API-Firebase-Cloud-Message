const express = require("express");
const bodyParser = require("body-parser");
const http = require('http')
const config = require("./app/config/public.config");
const multer  = require('multer')
const upload = multer()
const cors = require("cors");



let app = express()
app.use(cors({origin: '*'}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(upload.array())

require("./app/routes/notification.routes")(app);

let startServer = http.createServer(app)
    .listen(config.serverPort)

if (startServer) {
    console.log(`your server is running on port ${config.serverPort}`);
}


