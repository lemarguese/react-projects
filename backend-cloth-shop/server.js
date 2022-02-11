const express = require('express');
const app = express();
const usersDB = require("./users");
const clothesDB = require("./clothes");

usersDB.init("./users.json");
clothesDB.init("./clothes.json");

app.get("/clothes", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({mess: "hello"});
})

app.listen(8000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
