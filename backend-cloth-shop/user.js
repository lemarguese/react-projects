const express = require('express');
const router = express.Router();
const axios = require('axios');
// const fs = require('fs');
const db = require('../db_it');
const querystring = require('querystring');

const createRouter = () => {
    db.init(`./storage/phones.json`);

    router.get('/:id', async (req, res) => {
        const id = req.params.id;
        // const response = await axios.get(`http://192.168.15.213/CRM/hs/authorization/method/SMS/?id=${id}`);
        const response = await axios.get(`http://localhost:8000/CRM/hs/authorization/method/SMS/?id=${id}`);

        // const response = {
        //     data: {
        //         phone: "+77787773701",
        //         _id: "1267-02-00021",
        //         hash: '92db91fc93ce7a41dd020b9f8a29eced'
        //     }
        // };

        const obj = {
            phone: response.data.phone,
            _id: id,
            hash: response.data.hash
        }
        console.log('addUnique', obj);

        db.addUnique(obj);
        res.send({ result: true, phone: obj.phone });
    });

    router.post('/sms_check', (req, res) => {
        const sms = req.body.sms;
        const user = db.findByID(req.body._id);
        if (user.smsCode !== sms) res.status(403).send({ error: 'unauthorized' });

        res.send({ hash: user.hash });
    })

    router.post('/:id', (req, res) => {
        const user = db.findByID(req.params.id);
        console.log("USER ", user);
        if (!user) res.status(404).send({ error: 'not found' });
        const phone = req.body.phone;

        console.log('user', user, 'phone', phone, 'user.phone', user.phone);
        if (phone !== user.phone) return res.status(403).send({ error: 'unauthorized' });
        let smsCode = "";
        for (let i = 0; i < 4; i++) {
            smsCode += Math.ceil(Math.random() * 9) + "";
        };

        user.smsCode = smsCode;
        const smsContent = querystring.escape(`Ваш-кoд: ${smsCode} itsupport.kz`);
        axios.get('http://192.168.15.22/cgi/WebCGI?1500101=account=user&password=123456&port=1&destination=' + phone + '&content=' + smsContent);
        db.findByIdAndUpdate(user);
        res.send({ result: true, sms: smsCode });
    });



    return router;
}


module.exports = createRouter;
