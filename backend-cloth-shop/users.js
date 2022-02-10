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
    add: function (obj) {
        this.data.push(obj);
        this.save();
    },
    save: function () {
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    },
    findByID: function (id) {
        return this.data.filter(user => user._id === id)[0];
    },
    findByUserPass: function (user, pass) {
        return this.data.filter(user => user.username === user && user.password === pass);
    },
    getAllUser: function () {
        return this.data;
    },
    findByPhone: function (phone) {
        return this.data.filter(user => user.phone === phone)[0];
    },
    findByIdAndUpdate: function (obj) {
        const index = this.data.findIndex(el => el._id === obj.id);
        this.data[index] = obj;
        console.log('findAndUpdate', this.data[index]);
        this.save();
    },
    addUnique: function (obj) {
        if (!this.findByPhone(obj.phone)) {
            this.add(obj);
        } else {
            this.findByIdAndUpdate(obj);
        }
    }

}

module.exports = db;