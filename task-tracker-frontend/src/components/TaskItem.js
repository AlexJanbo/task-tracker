import React from 'react'


function TaskItem({task}) {



    return (
        <div>
            <div>
                {new Date(task.createdAt).toLocaleDateString('en-US')}
            </div>
            <h2>Title: {task.title}</h2>
            <h2>Description: {task.description}</h2>
            <h2>Priority: {task.priority}</h2>
            <h2>Status: {task.status}</h2>
        </div>
    )
}

export default TaskItem