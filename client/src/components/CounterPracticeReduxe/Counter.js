import {connect} from 'react-redux'

import {Component} from "react";
import {add2, asyncAdd} from "../../redux/actions/actions";

class Counter extends Component {
    render() {
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button
                        onClick={() => this.props.onChange(1)}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => this.props.onChange(-1)}
                    >
                        Sub
                    </button>
                </div>

                {/*Async changes state*/}
                <div>
                    <button
                        onClick={() => this.props.onAsyncAdd(100)}
                    >
                        Ассинхронно добавить 100
                    </button>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch(add2(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
