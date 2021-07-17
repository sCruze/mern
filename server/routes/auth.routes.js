const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../../lib/config').jwtSecret
const User = require('../models/User')

// Роут регистрации в личном кабинете
router.post('/registration', async (req, res) => {
    // Обработка запроса, если все прошло успешно
    try {

        // Выводим данные из тела запроса в переменные
        const {email, password} = req.body

        // Ищем в БД пользователя по пришедшему по запросу email
        const candidate = await User.findOne({email})

        // Если в БД найдена запись с аришедшим от пользователя email, возвращаем статус ответа 400 и сообщение
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует в БД)' })
        }

        // Хешируем пароль
        const hashPassword = await bcrypt.hash(password, 12)

        // Создаем нового пользователя и записываем его в переменную User
        const user = new User({ email, password: hashPassword })

        // Сохраняем пользователя в БД
        await user.save()

        // Отправляем ответ со статусом 201 и сообщением об удачной регистрации пользователя
        res.status(201).json({ message: 'Пользователь успешно создан!' })
    }
    // Обрабатываем ошибку регистрации пользователя
    catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так!' })
    }
})

// Роут входа в личный кабинет
router.post('/login', async (req, res) => {
    try {

        // Выводим данные из тела запроса в переменные
        const { email, password } = req.body

        // В БД находим пользователя по email и передаем все данные в переменную user
        const user = await User.findOne({ email })

        // Проверяем, если пароли совпали
        const isMatch = await bcrypt.compare(password, user.password)

        // Если нет подходящего по email пользователя или не совпали пароли, отправляем статус 400 и соответствующее
        // сообщение
        if (!user || !isMatch) {
            res.status(400).json({ message: 'Неверно введены данные, пожалуйста проверьте и повторите запрос!' })
        }

        // Определяем токен
        const token = jwt.sign(
            { userId: user.id },
            jwtSecret, // Секретный jwt ключ
            { expiresIn: '1h' } // Свойство, означающее сколько будет жить токен 1h = 1час
        )

        console.log('Req: ', req.body)

        // В тело ответа, отправляем токен и id пользователя
        res.json({ token, userId: user.id })

    }
    // Определяем ошибку
    catch (err) {
        res.status(500).json({ message: 'Ошибка! Проверьте правильность ввода данных.' })
    }
})

// Экспортируем роуты
module.exports = router
