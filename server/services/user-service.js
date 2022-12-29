const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');

class UserService {
    async register(email, password) {
        const registeredUser = await UserModel.findOne({email})
        if (registeredUser) {
            throw new Error(`Пользователь с почтой ${registeredUser} уже зарегистрирован`)
        } else {
            const hashPassword = await bcrypt.hash(password, 4);
            const newUser = await UserModel.create({email, password: hashPassword})
        }
    }
}

module.exports = new UserService()
