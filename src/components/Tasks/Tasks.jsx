import { useState } from 'react'
import './Tasks.css'

export const Tasks = () => {

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  
    const getTask = (event) => {
        setNewTask(event.target.value)
    }

    const addTasks = () => {
        setTasks([...tasks,newTask])
    }

  return (
    <>
       <input onChange={getTask} placeholder='Enter the task' type="text" />
       <button onClick={addTasks}>New Task</button>
       <hr />
       <ul>
        {
            tasks.map( element => <li>{element}</li> )
        }
       </ul>      
    </>
  )
}
