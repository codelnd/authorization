const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service')

class UserService {
    async register(email, password) {
        const registeredUser = await userModel.findOne({email})
        if (registeredUser) {
            throw new Error(`Пользователь с почтой ${registeredUser} уже зарегистрирован`)
        } else {
            const hashPassword = await bcrypt.hash(password, 4);
            const activationLink = uuid.v4();
            const newUser = await userModel.create({email, password: hashPassword, activationLink})
            await mailService.sendActivationLink(email, activationLink)
        }
    }
}

module.exports = new UserService()
