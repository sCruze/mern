const { Schema, model } = require('mongoose')

// Схема для создания задачи
const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    liked: {
        type: Boolean,
        default: false
    },
    favorites: {
        type: Boolean,
        default: false
    },
    dateAdded: {
        type: Date,
        default: new Date()
    }
})

// Экспорт модели задачи
module.exports = model('Task', schema)
