const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    //Подтверждение почты пользователем
    isActivated: {
        type: Boolean,
        default: false,
    },
    //Ссылка для активации
    activationLink: {
        type: String,
    },
})

module.exports = model('User', UserSchema)
