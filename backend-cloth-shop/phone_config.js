const db = require("./phone");
const express = require("express");
const axios = require("axios");
const router = express.Router();
const createRouter = () => {
    db.init("./phone.json");

    router.get('/:id', async (req, res) => {
        let id = req.params.id;
        const response = await axios.get(`http://localhost:8001/users/${id}`);
        let arr = db.findAllowancesById(response.data.phone);
        res.send(arr);
    });

    router.post("/save", (req, res) => {
        let phone = Object.keys(req.body)[0];
        let {itsupport, avitim} = Object.entries(req.body)[0][1];
        db.savePhone(phone, itsupport, avitim);
        res.send("hello");
    })

    return router;
}

module.exports = createRouter;