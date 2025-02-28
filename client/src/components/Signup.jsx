import React, { useState } from 'react'
import axios, { Axios } from 'axios'
import { Link } from 'react-router'


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
    <div className='container w-full h-screen flex items-center flex-col justify-center bg-gray-200'>
      <div className='md:w-64'>
        <h1 className='text-3xl md:text-5xl mb-4 text-center font-bold'>Welcome</h1>
        <form onSubmit={handleSubmit} className='flex space-y-4 flex-col mb-4'>
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
              className='border focus:outline-none rounded-md py-2 px-6 block'
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
              className='border focus:outline-none rounded-md py-2 px-6 block'
            />
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
              className='border focus:outline-none rounded-md py-2 px-6 block'
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
              className='border focus:outline-none rounded-md py-2 px-6 block'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-gray-700 text-white hover:bg-gray-900 py-2 rounded-md'
          >Create account</button>
        </form>
        <p className='relative overflow-hidden text-center w-full text-gray-950 mb-4 text-xl
                before:w-1/2 before:h-0.5 before:block before:bg-gray-400 before:absolute before:top-1/2 before:transform before:-translate-x-4.5
                after:w-1/2 after:h-0.5 after:block after:bg-gray-400 after:absolute after:top-1/2 after:transform after:translate-x-full after:ml-4.5 '
        >or</p>
        <button onClick={handleSubmit} className='w-full px-6 py-2 rounded-md bg-gray-900 hover:bg-gray-950 text-white mb-2'>Sign up with Google</button>
        <p>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
