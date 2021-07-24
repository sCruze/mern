// Импорт стилей
import './Tasks.scss'

// Импорт компонентов
import TaskList from "../../containers/Tasks/TasksList/TaskList";

// Страница Tasks
export default function tasks() {
    return (
        <div className="task-list-container">
            <TaskList />
        </div>
    )
}
