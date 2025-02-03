import React, { useState } from 'react'
import axios, { Axios } from 'axios'

function Signup() {
  // const API_BASEURL = process.env.REACT_APP_API_BASEURL
  const API_BASEURL = import.meta.env.VITE_REACT_APP_API_BASEURL

  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: ''
  })

  function handleSubmit(ev) {
    ev.preventDefault()
    const data = {
      userFirstName: formData.userFirstName,
      userLastName: formData.userLastName,
      userEmail: formData.userEmail,
      userPassword: formData.userPassword,
    }
    console.log(data);
    
    axios.post(`${API_BASEURL}/users/registerUser`, data)
    .then(res => console.log(res.data))
    // .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Welcome to TaskPilot</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <div>
            <input
              type="text"
              name='userFirstName'
              placeholder='First Name'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value
                }
              })}
            />
          </div>
          <div>
            <input
              type="text"
              name='userLastName'
              placeholder='Last Name'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            name='userEmail'
            placeholder='Enter your email'
            onChange={(e) => setFormData((prev) => {
              return {
                ...prev,
                [e.target.name]: e.target.value
              }
            })}
          />
        </div>
        <div>
          <input
            type="password"
            name="userPassword"
            id=""
            placeholder='Enter a strong password'
            onChange={(e) => setFormData((prev) => {
              return {
                ...prev,
                [e.target.name]: e.target.value
              }
            })}
          />
        </div>
        <button type='submit'>Create account</button>
      </form>
      <button onClick={handleSubmit}>Sign up with Google</button>
      <p>Already have an account? login</p>
    </div>
  )
}

export default Signup
