import React from 'react'

function NoProject({onStartAddingProject}) {
  return (
    <div>
      <p>No project selected</p>
      <button onClick={onStartAddingProject}>Create a new project</button>
    </div>
  )
}

export default NoProject
