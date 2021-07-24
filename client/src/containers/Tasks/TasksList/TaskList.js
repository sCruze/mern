import {connect} from "react-redux"

import {useEffect} from "react"

import './TaskList.scss'
import { fetchTasks } from "../../../store/actions/task"

import TaskItem from "../../../components/TaskItem/TaskItem"

function TaskList(props) {

    useEffect(() => {
        props.onFetchTasks('all')
    }, [])

    const renderTasks = () => {
        if (!props.loading) {

            return props.tasks.tasks.map((item, i) => {
                return <TaskItem key={item._id} data={[item, i + 1]}/>
            })
        }
    }

    return (
        <ul className='task-list'>
            {
                props.tasks.loading
                ? <h1>Loading</h1>
                : renderTasks()
            }
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchTasks: criteria => dispatch(fetchTasks(criteria))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
