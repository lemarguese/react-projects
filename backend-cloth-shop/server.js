const express = require('express');
const app = express();
const cloth = express;
const usersDB = require("./users");
const clothesDB = require("./clothes");

usersDB.init("./users.json");
clothesDB.init("./clothes.json");
app.get("/users", (req, res) => {
    let obj = usersDB.getAllUser();
    res.send({data: obj});
});
app.get("/clothes", (req, res) => {
    let obj = clothesDB.getAllClothes();
    res.status(200).send(obj);
})
app.post("login", (req, res) => {
    if (!req.body) return res.status(400);
    console.log(req.body)

    res.status(200).send({result: true});
})

app.use('/clothes', cloth);

app.listen(8000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
