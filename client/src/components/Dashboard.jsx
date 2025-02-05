import React, { useRef, useState } from 'react'
import Sidebar from './Sidebar'
import CreateProject from './CreateProject'
import NoProject from './NoProject'
import Project from './Project'

function Dashboard() {
    const [selectedProject, setSelectedProject] = useState(undefined)
    const [projects, setProjects] = useState([])
    const title = useRef()
    const description = useRef()
    const date = useRef()

    function handleStartAddingProject() {
        setSelectedProject(null)
    }

    function handleSaveProject() {
        const projectDetails = {
            title: title.current.value,
            description: description.current.value,
            date: date.current.value,
        }
        setProjects((prev) => {
            return [
                ...prev,
                projectDetails
            ]
        })
        setSelectedProject(undefined)
    }

    function handleSelectProject(id) {
        const project = projects.find((project) => project.title === id)
        setSelectedProject(project)
    }

    function handleDeleteProject(id) {
        setSelectedProject(() => undefined)        
        const updatedProjects = projects.filter((project) => project.title !== id)
        setProjects(() => {
            return [
                ...updatedProjects
            ]
        })
    }
    return (
        <div>
            <Sidebar
                projects={projects}
                onStartAddingProject={handleStartAddingProject} onSelectProject={handleSelectProject}
            />

            {
                selectedProject === undefined ? (
                    <NoProject
                        onStartAddingProject={handleStartAddingProject}
                    />
                ) : selectedProject === null ? (
                    <CreateProject
                        date={date}
                        title={title}
                        description={description}
                        onSaveProject={handleSaveProject}
                    />
                ) : <Project
                    project={selectedProject}
                    onDelete={handleDeleteProject}
                />
            }
        </div>
    )
}

export default Dashboard
