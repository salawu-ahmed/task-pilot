import React, { useRef, useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: ''
  })

  function handleSubmit() {

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
              onChange={() => setFormData((prev) => {
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
              onChange={() => setFormData((prev) => {
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
            type="userEmail"
            placeholder='Enter your email'
            onChange={() => setFormData((prev) => {
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
            onChange={() => setFormData((prev) => {
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

export default Login
