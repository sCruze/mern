// Импорт стилей
import './TaskItem.scss'

import {connect} from "react-redux"
import {changeTask} from "../../store/actions/task-change"

import {useState} from "react"

function TaskItem(props) {
    const {_id, title, status, liked, favorites} = props.data[0]

    const [likedTask, setLikedTask] = useState(liked)

    const [favoritesTask, setFavoritesTask] = useState(favorites)

    const numberItem = props.data[1]

    const classesLiked = ['not-liked']
    const classesFavorites = ['not-favorites']

    if (likedTask) {
        classesLiked.push('liked')
    }

    if (favoritesTask) {
        classesFavorites.push('favorites')
    }

    return (
        <li
            onDoubleClick={() => {
                props.onChangeTask([
                    {_id, fieldKey: 'liked', fieldValue: likedTask}
                ])
                setLikedTask(!likedTask)
            }}
            className="task-item">
            <span>
                {numberItem}
            </span>
            <span className="task-title">
                {title}
            </span>
            <div className="task-info">
                <span>
                    {
                        status
                        ? <p>Выполнено</p>
                        : <p>Не выполнено</p>
                    }
                </span>
                <span
                    className={classesFavorites.join(' ')}
                    onClick={() => {
                        props.onChangeTask([
                            {_id, fieldKey: 'favorites', fieldValue: favoritesTask}
                        ])
                        setFavoritesTask(!favoritesTask)
                    }}
                >
                    {
                        favoritesTask
                        ? <svg width="1em" height="1em" viewBox="0 0 16 16"
                               xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        : <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                               xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                            </svg>
                    }
                </span>
                <span
                    className={classesLiked.join(' ')}

                >
                    {
                        likedTask
                        ? <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                                onClick={() => {
                                    props.onChangeTask([
                                        {_id, fieldKey: 'liked', fieldValue: likedTask}
                                    ])
                                    setLikedTask(!likedTask)
                                }}
                            >
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                        </svg>
                    }
                </span>
            </div>
        </li>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeTask: fieldChange => dispatch(changeTask(fieldChange))
    }
}

export default connect(null, mapDispatchToProps)(TaskItem)
