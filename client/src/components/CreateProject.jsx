import React, { useState } from 'react'

function CreateProject({date, title, description, onSaveProject}) {
    return (
        <div>
            <menu>
                <button>cancel</button>
                <button onClick={onSaveProject}>save</button>
            </menu>
            <div>

                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' ref={title} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="" ref={description}></textarea>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' ref={date}/>
                </div>
            </div>
        </div>
    )
}

export default CreateProject
