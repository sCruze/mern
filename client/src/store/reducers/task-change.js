import {CHANGE_TASK, CHANGE_TASK_ERROR, CHANGE_TASK_SUCCESS} from "../actions/actionType";


const initialState = {
    tasks: [],
    loading: true,
    error: null
}

export default function taskChange(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TASK:
            return {
                tasks: [...action.tasks], loading: false
            }
        case CHANGE_TASK_SUCCESS:
            return {
                tasks: [...action.tasks]
            }
        case CHANGE_TASK_ERROR:
            return {
                tasks: [...state], loading: false, error: action.error
            }
        default:
            return state
    }
}

