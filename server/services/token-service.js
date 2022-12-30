const jwt = require('jsonwebtoken')
const jwtModel = require('../models/jwt-model');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await jwtModel.findOne({user: userId})
        if (tokenData) {
            //Если токен найден - перезаписываем
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }
        const token = await jwtModel.create({user: userId, refreshToken})
        return token
    }
}

module.exports = new TokenService()
