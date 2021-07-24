import axios from 'axios'
import {FETCH_TASKS_ERROR, FETCH_TASKS_START, FETCH_TASKS_SUCCESS} from "./actionType";

export function fetchTasks(criteria) {
    return async dispatch => {
        dispatch(fetchTasksStart())
        try {
            const response = await axios.post('/api/task-find', {criteria})

            const tasks = []

            response.data.tasks.forEach(item => tasks.push(item))

            dispatch(fetchTasksSuccess(tasks))
        } catch (err) {
            dispatch(fetchTasksError(err))
        }
    }
}

export function fetchTasksStart() {
    return {
        type: FETCH_TASKS_START
    }
}

export function fetchTasksSuccess(tasks) {
    return {
        type: FETCH_TASKS_SUCCESS,
        tasks
    }
}

export function fetchTasksError(error) {
    return {
        type: FETCH_TASKS_ERROR,
        error
    }
}
