import './Home.scss'

import { Link } from "react-router-dom";

// Страница Home
export default function home() {

    return (
        <div className="home-page">
            <div className="home__header">
                <h2>Fullstack приложение, написанное на React/Express/MongoDB</h2>
            </div>
            <div className="list__link">
                <p>Приложения для демонстрации работы</p>
                <p>React - Express - MongoDB</p>
                <ul>
                    <li>
                        <Link className="btn btn-rounded btn-success" to="/tasks">
                            Задачи
                        </Link>
                    </li>
                    <li>
                        <Link className="btn btn-rounded btn-success" to="/questionnaire">
                            Опросник
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
