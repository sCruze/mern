import axios from "axios"
import {CHANGE_TASK_ERROR} from "./actionType";

export function changeTask(props) {
    return async dispatch => {
        try {
            await axios.post('/api/task-change', props)

        } catch (err) {
            dispatch(changeTaskError(err))
        }
    }
}

export function changeTaskError(error) {
    return {
        type: CHANGE_TASK_ERROR,
        error
    }
}
