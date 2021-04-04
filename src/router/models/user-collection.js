const bcrypt = require('bcrypt');
class UsersCollection{
    constructor(model){
        this.model=model;
    }
    async create(user){
        user.password = await bcrypt.hash(user.password, 10);
        const doc = new this.model(user);
        const record=  await doc.save();
        return record;
    }
    async isValidUser(user){
        console.log(user)
        const record = await this.model.findOne({username:user.username});
        const valid = await bcrypt.compare(user.password, record.password);
        if (valid) {
            return record;
        }
        return false;
    }
}
module.exports=UsersCollection;