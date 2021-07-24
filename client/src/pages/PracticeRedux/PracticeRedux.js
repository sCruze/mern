// import { useSelector, useDispatch } from 'react-redux'
import { connect } from "react-redux"

import Counter from "../../components/CounterPracticeReduxe/Counter";
import {add, addNumber, sub} from "../../redux/actions/actions";

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // onAdd: () => dispatch({type: 'ADD'}),
        // onSub: () => dispatch({type: 'SUB'}),
        // onAddNumber: number => dispatch({ type: 'ADD_NUMBER', payload: number })
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number))
    }
}

// Страница Practice Redux
function PracticeRedux(props) {

    return (
        <div className="practice-redux-page">
            <h2>Счетчик: {props.counter}</h2>
            <hr/>
            <div className="Actions">
                <button
                    onClick={props.onAdd}
                >
                    Добавить 1
                </button>
                <button
                    onClick={props.onSub}
                >
                    Вычесть 1
                </button>
            </div>
            <div className="Actions">
                <button
                    onClick={props.onAddNumber.bind(this, 15)}
                >
                    Добавить 15
                </button>
                <button
                    onClick={() => props.onAddNumber(-17)}
                >
                    Вычесть 17
                </button>
            </div>

            <Counter />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeRedux)
