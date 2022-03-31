const fs = require('fs');


const db = {
    data: [],
    path: '',
    init: function (path) {
        try {
            this.path = path;
            const temp = JSON.parse(fs.readFileSync(this.path));
            this.data = temp;
        } catch (err) {
            this.data = [];
        }
    },
    save: function () {
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    },
    savePhone: function (phone, id_avit, id_itsg) {
        let obj = {
            [phone]: {
                itsupport: id_itsg,
                avitim: id_avit
            }
        }
        this.data.push(obj);
        this.save();
    },
    findAllowancesById: function (id) {
        for (let i of this.data) {
            let first = Object.keys(i)[0];
            let entries = Object.entries(i)[0];
            if (first === id) {
                return entries[1];
            }
        }
    }
}

module.exports = db;
