const express = require("express");
const basicAuth = require("basic-auth-connect");
const app = express();

app.use(basicAuth("foo", "bar"), express.static("static"));

app.listen(3001);
