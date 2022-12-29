const UserModel = require('../models/user-model');

class UserService {
    async register(email, password) {
        const registeredUser = await UserModel.findOne({email})
        if (registeredUser) {
            throw new Error(`Пользователь с почтой ${registeredUser} уже зарегистрирован`)
        } else {
            const newUser = await UserModel.create({email, password})
        }
    }
}

module.exports = new UserService()
