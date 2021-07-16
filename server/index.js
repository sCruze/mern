require('dotenv').config()

// Экспортируем модуль приложения app из файла app.js
const app = require('./app')

// Модули, используемые в приложении
const consola = require('consola')
const PORT = require('../lib/config').PORT

// Асинхронная функция старта приложения
async function startApp(PORT) {
    // Блок удачного вызова функции старта приложения
    try {
        // вызываем метод listen, для запуска сервера на порту PORT
        app.listen(PORT, () => {
            // Выводим соответствующую информацию в консоли
            consola.ready({
                message: `Server has been started http://localhost:${PORT}`,
                badge: true
            })
        })
    } catch (err) { // Блок вывода ошибок в консоли
        consola.error(`Server error ${new Error(err)}`)
        process.exit(1)
    }
}

// Вызов функции запуска приложения
startApp(PORT)
