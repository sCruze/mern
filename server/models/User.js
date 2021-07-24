const { Schema, model } = require('mongoose')

// Схема для создания пользователя
const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

// Экспорт модели пользователя
module.exports = model('User', schema)
