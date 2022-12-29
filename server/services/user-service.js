const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

class UserService {
    async register(email, password) {
        const registeredUser = await UserModel.findOne({email})
        if (registeredUser) {
            throw new Error(`Пользователь с почтой ${registeredUser} уже зарегистрирован`)
        } else {
            const hashPassword = await bcrypt.hash(password, 4);
            const activationLink = uuid.v4();
            const newUser = await UserModel.create({email, password: hashPassword, activationLink})
        }
    }
}

module.exports = new UserService()
