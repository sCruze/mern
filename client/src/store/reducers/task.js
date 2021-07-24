// Инициализированное состояние
import {
    FETCH_TASKS_ERROR,
    FETCH_TASKS_START,
    FETCH_TASKS_SUCCESS
} from "../actions/actionType";

const initialState = {
    tasks: [],
    loading: true,
    error: null
}

export default function fetchTasks(state = initialState, action) {
    switch (action.type) {
        case FETCH_TASKS_START:
            return {
                tasks: state, loading: true
            }
        case FETCH_TASKS_SUCCESS:
            return {
                tasks: [...action.tasks], loading: false
            }
        case FETCH_TASKS_ERROR:
            return {
                tasks: [...state], loading: false, error: action.error
            }
        default:
            return state
    }
}
