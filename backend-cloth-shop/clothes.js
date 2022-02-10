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
    getAllClothes: function () {
        return this.data;
    }
}

module.exports = db;