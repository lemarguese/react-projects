const express = require('express');
const app = express();
const db = require("./phone");

db.init("./phone.json");
app.use(express.json());
app.get('/savePhone/:phone', (req, res) => {
    let phone = req.params.phone;
    let arr = db.findAllowancesByPhone(phone);
    res.send(arr);
})
app.post("/save", (req, res) => {
    let phone = Object.keys(req.body)[0];
    let {itsupport, avitim} = Object.entries(req.body)[0][1];
    db.savePhone(phone, itsupport, avitim);
    res.send("hello");
})
app.listen(8000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
