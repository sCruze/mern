const router = require('express').Router()

const Task = require('../models/Task')

// Роут добовления задачи
router.post('/task-add', async (req, res) => {

    // Обработка запроса, если все прошло успешно
    try {

        // Выводим данные из тела запроса
        const {title} = req.body

        // Создаем переменную с данными для записи в бд
        const task = new Task({ title })

        // Сохраняем данные в БД
        await task.save()

        // Отправляем ответ со статусом 201 и сообщением об удачной регистрации пользователя
        res.status(201).json({ message: 'Задача успешно добавлена!' })
    }
    catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так!' })
    }
})

// Роут получения задач по критерию
router.post('/task-find', async (req, res) => {

    // Обработка запроса, если все прошло успешно
    try {
        const { criteria } = req.body
        if (criteria === 'all') {
            return await res.status(201).json({message: 'Данные успешно получены!', tasks: await Task.find({})})
        }
    }

    catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так!' })
    }
})


// Роут обновления данных в БД
router.post('/task-change', async (req, res) => {

    const {_id, fieldKey, fieldValue} = req.body[0]

    // Обработка запроса, если все прошло успешно
    try {
        await Task.updateOne({_id}, { $set: {[fieldKey]: !fieldValue} })
        return await res.status(201).json({message: 'Данные успешно обновлены'})
    }

    catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так!' })
    }
})

// Экспортируем роуты
module.exports = router
