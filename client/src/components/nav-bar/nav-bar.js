// Импорт стилей
import './nav-bar.scss'

import { Link } from "react-router-dom";

// Компонент Навигационной панели в верхней части страницы
export default function navBar() {

    return (
        <div className="nav-bar">
            <div className="list-link">
                <Link to="/tasks" >Задачник</Link>
                <Link to="/questionnaire">Опросник</Link>
            </div>
        </div>
    )
}
