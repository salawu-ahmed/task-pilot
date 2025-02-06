import React, { useState } from 'react'

function Task() {
    const [tasks, setTasks] = useState([])
    // const task = {
    //     title: '',
    //     subTasks: [{title:''}],
    //     deadline: 'date'
    // }
    const [enteredValue, setEnteredValue] = useState('')
    function handleKeyDown (e) {
      if(e.key === 'Enter'){
        setTasks((prevState) => {
          return [
            ...prevState,
            enteredValue
          ]
        })
        e.target.value = ''
      }
    }
  return (
    <section>
      <h2>TASKS</h2>
      <input type="text" onKeyDown={handleKeyDown} onChange={(e) => setEnteredValue(e.target.value)}/>
      <ul>
        {
          tasks.map((task) => {
            return <li key={task}>{task}</li>
          })
        }
      </ul>
    </section>
  )
}

export default Task
