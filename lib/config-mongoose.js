// Модули для подключения к БД
const mongoose = require('mongoose')
const mongoUri = require('./config').mongoUri
const consola = require('consola')

// Экспортируем модуль подключения к БД
module.exports = () => {
    mongoose
        // Прописываем парвила коннекта к БД
        .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        // Выводим уведомеление о подключении к БД в консоль
        .then(() =>
            consola.ready({
                message: 'MongoDB has been connected',
                badge: true
            }))
        // Обрабатываем ошибку подключения
        .catch((err) => {
            consola.error({ message: `Mongo error: ${new Error(err)}` })
            process.exit(1)
        })
}
