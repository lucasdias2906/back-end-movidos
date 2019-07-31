"use strict"
const app = require("../src/app");
const debug = require("debug")("nodestr:server");
const http = require("http");
var cors = require('cors');
app.use(cors());

const port = normalizePort(process.env.PORT || "21254");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListinig);
console.log("Connection server port => " + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port
    }

    return false;
}

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ?
        "Pipe" + port :
        "Port" + port;

    switch (error.code) {
        case "EACESS":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is alread in use");
            process.exit(1);
            break;

        case "ETIMEDOUT":
            console.error(bind + " timeout request");
            process.exit(1);
            break;

        default:
            throw error;
    }
}

function onListinig() {
    const addr = server.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;

    debug("Listening on " + bind)
}