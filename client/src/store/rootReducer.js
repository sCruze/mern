// Метод для объединения нескольких reduce
import { combineReducers } from 'redux'


import counter1 from "../redux/reducers/counter1"
import counter2 from "../redux/reducers/counter2"
import fetchTasks from "./reducers/task";

// Прописываем, какие reduce должны быть объеденены
export default combineReducers ({
    tasks: fetchTasks,
    counter1,
    counter2
})
