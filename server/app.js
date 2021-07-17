const path = require('path')
const bodyParser = require('body-parser')

// Экспортируем новый экземпляр класса express в переменную app
const app = require('express')()

// Регистрация модулей в приложении
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Регистрация роутов в приложении
app.use('/api/auth', require('./routes/auth.routes'))

app.post('/', (req, res) => {
    try {
        console.log('req', req.body)
        return res.status(201).json({ message: 'Все хорошо!' })
    }
    catch (err) {
        res.status(500).json({ message: `Что-то пошло не так. Error:  ${new Error(err)}` })
    }
})

if (process.env.NODE_ENV === 'production') {
    app.use('/', require('express').static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })
}

// Экспортируем переменную app, для использования его в других фалйах приложения
module.exports = app
