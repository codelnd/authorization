const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class UserService {
    async register(email, password) {
        const registeredUser = await UserModel.findOne({email})
        if (registeredUser) {
            throw new Error(`Пользователь с почтой ${registeredUser} уже зарегистрирован`)
        } else {
            const hashPassword = await bcrypt.hash(password, 4);
            const activationLink = uuid.v4();
            const newUser = await UserModel.create({email, password: hashPassword, activationLink})
            await mailService.sendActivationLink(email, activationLink)
            const userDto = new UserDto(newUser);
            const tokens = tokenService.generateTokens({...userDto})
        }
    }
}

module.exports = new UserService()
