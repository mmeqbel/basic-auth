const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});
const UsersModel = mongoose.model('users', usersSchema);

module.exports=UsersModel;
