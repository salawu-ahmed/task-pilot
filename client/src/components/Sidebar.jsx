import React from 'react'

function Sidebar({projects, onStartAddingProject, onSelectProject}) {
    return (
        <aside>
            <div>
                <p>user name</p>
                <p>user email</p>
            </div>
            <button onClick={onStartAddingProject}>+ Add Project</button>

            <div>
                {
                    projects.map((project) => {
                        return <button key={project.title} onClick={() => onSelectProject(project.title)}>{project.title}</button>
                    })
                }
            </div>

            {/* i will rather add this to the individual project page */}
            {/* <nav>
                <div>All Tasks</div>
                <div>Important Tasks</div>
                <div>Completed Tasks</div>
                <div>Incompleted Tasks</div>
            </nav> */}

            <div>Logout</div>
        </aside>
    )
}

export default Sidebar
