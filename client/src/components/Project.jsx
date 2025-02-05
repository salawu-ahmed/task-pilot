import React from 'react'

function Project({ project, onDelete }) {
    return (
        <div>
            <button onClick={() => onDelete(project.title)}>delete</button>
            <div>
                <h1>
                    {project.title}
                </h1>
                <p>{project.description}</p>
                <p>{project.date}</p>
            </div>
        </div>
    )
}

export default Project
