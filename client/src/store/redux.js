const redux = require('redux')

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

    // Работа с action
    if (action.type === 'ADD') {
        // Возвращаем новый state и прибаляем 1 к параметру counter
        return {
            counter: state.counter + 1
        }
    }

    // Вычитаем из counter 1
    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }

    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }

    return state

}

// Store
const store = redux.createStore(reducer)
// console.log('1', store.getState())

// Прописываем модуль слежки за изменениями
store.subscribe(() => {
    console.log('Subscribe', store.getState())
})


// Actions
// type - это как будет называться действие, чтобы в switch or if по этомк параметру определить что делать
const addCounter = {
    type: 'ADD'
}


// Вызов действия через dispatch
store.dispatch(addCounter)
// console.log('2', store.getState())

// Передача действия напрямую
store.dispatch({
    type: 'SUB'
})
// console.log('3', store.getState())

// Импользование поля value
store.dispatch({ type: 'ADD_NUMBER', value: 10 })
// console.log('4', store.getState())
