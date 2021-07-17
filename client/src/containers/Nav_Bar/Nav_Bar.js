// Импорт стилей
import './Nav_Bar.scss'

import { Link } from "react-router-dom";

// Компонент Навигационной панели в верхней части страницы
export default function NavBar({onActivePanelUser, activePanelUser}) {

    // Переменная с классами от кнопки на панели навигации для активации модального окна
    let btnPanelUserClasses = ['nav-bar__user-panel-btn']

    // Если сотояние activePanelAccount === true, добовлять класс active-panel
    if (activePanelUser) {
        btnPanelUserClasses.push('active-panel')
    }

    return (
        <div className="nav-bar">
            <div className="home-link">
                <Link to="/">Главная</Link>
            </div>
            <div className="list-link">
                <Link to="/tasks" >Задачник</Link>
                <Link to="/questionnaire">Опросник</Link>
            </div>
            <div
                onClick={onActivePanelUser}
                className={btnPanelUserClasses.join(' ')}
            >
                <span className="triangle"></span>
                <p>Войти</p>
            </div>
        </div>
    )
}