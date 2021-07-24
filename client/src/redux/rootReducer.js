// Метод для объединения нескольких reduce
import { combineReducers } from 'redux'

import counter1 from "./reducers/counter1";
import counter2 from "./reducers/counter2";

// Прописываем, какие reduce должны быть объедены
export default combineReducers ({
    counter1, counter2
})
