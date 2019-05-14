const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema ({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    name: { type: String, required: true },
    created: { type: Date, default: Date.now }

});

module.exports = mongoose.model('User', UserSchema);


