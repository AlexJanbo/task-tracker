import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

function TaskItem({task}) {

    const dispatch = useDispatch()

    return (
        <div>
            <div>
                {new Date(task.createdAt).toLocaleDateString('en-US')}
            </div>
            <h2>{task.text}</h2>
            {/* <h2>{task.description}</h2> */}
            <button onClick={() => dispatch(deleteTask(task._id))}>X</button>
        </div>
    )
}

export default TaskItem