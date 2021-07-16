const path = require('path')

// Экспортируем новый экземпляр класса express в переменную app
const app = require('express')()


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../views/index.html'))
// })
//
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, '../views/about.html'))
// })


if (process.env.NODE_ENV === 'production') {
    app.use('/', require('express').static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })
}

// Экспортируем переменную app, для использования его в других фалйах приложения
module.exports = app
