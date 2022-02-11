const fs = require("fs");

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
    // saveData: function (id_avit, phone, id_itsg) {
    //     let obj = {
    //         [phone]: {
    //             itsupport: id_itsg,
    //             avitim: id_avit
    //         }
    //     }
    //     this.data.push(obj);
    //     JSON.stringify(obj)fs.writeFileSync(this.path)
    // }
}

module.exports = db;