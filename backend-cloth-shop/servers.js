const express = require('express');
const app = express();
const db = require('./users')

db.init();
app.use(express.json());
app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    let obj = db.getUserPhone(id);
    res.send(obj);
})
app.listen(8001);
