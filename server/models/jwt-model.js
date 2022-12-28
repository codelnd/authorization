const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
    //Ссылка на пользователя
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    },
})

module.exports = model('Token', TokenSchema)
