// style
import './ModalPanelUser.scss'
import {useState} from "react";

const axios = require('axios')

export default function ModalPanelUser({activePanelUser}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Функция входа в личныйкабинет
    async function signIn(e) {
        // Отмена стандартного поведения браузера
        e.preventDefault()

        // Данные из формы
        const user = {email, password}

        console.log(user)

        axios.post(
            '/api/auth/login',
            user
        )
            .then((res) => {
                console.log('response: ', res)
            })
            .catch((err) => {
                console.log(new Error(err))
            })
    }

    // Добовляение в state email
    function onEmailValueChange(e) {
        setEmail(e.target.value)
    }

    // Добовление в state password
    function onPasswordValueChange(e) {
        setPassword(e.target.value)
    }

    // Массив с классами для панели пользователя
    let panelClasses = ["modal-user"]

    // Если состояние activePanelUser=true, тогда добовляем новый класс в массив
    if (activePanelUser) {
        panelClasses.push('modal-active')
    }

    return (
        <form
            onSubmit={signIn}
            className={panelClasses.join(" ")}
        >
            <p className="modal-header">Личный кабинет</p>
            <div className="modal__block-inputs">
                <input
                    onChange={onEmailValueChange}
                    type="text"
                />
            </div>
            <div className="modal__block-inputs">
                <input
                    onChange={onPasswordValueChange}
                    type="text"
                />
            </div>
            <button className="btn btn-rounded">
                Вход
            </button>
        </form>
    )
}
