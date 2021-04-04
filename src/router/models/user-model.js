const mongoose = require('mongoose');
// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});
const Users = mongoose.model('users', usersSchema);
module.exports=Users;
