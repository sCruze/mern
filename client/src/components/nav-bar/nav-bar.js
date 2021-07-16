// Импорт стилей
import './nav-bar.scss'

import { Link } from "react-router-dom";

// Компонент Навигационной панели в верхней части страницы
export default function navBar() {

    return (
        <div className="nav-bar">
            <div className="home-link">
                <Link to="/">Главная</Link>
            </div>
            <div className="list-link">
                <Link to="/tasks" >Задачник</Link>
                <Link to="/questionnaire">Опросник</Link>
            </div>
            <div className="user__block">
                <span className="triangle"></span>
                <p>Войти</p>
            </div>
        </div>
    )
}
