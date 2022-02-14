const fs = require('fs');
const db = {
    data: [],
    path: './users.json',
    init: function () {
        try {
            const temp = JSON.parse(fs.readFileSync('./users.json'));
            this.data = temp;
        } catch (err) {
            console.log(err)
            this.data = [];
        }
    },
    save: function () {
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    },
    getUserPhone: function (id) {
        console.log(this.data);
        return this.data.filter(user => user.id === id);
    }
}

module.exports = db;
