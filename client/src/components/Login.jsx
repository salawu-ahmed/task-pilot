import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import * as Yup from 'yup'

function Login() {
    const API_BASEURL = import.meta.env.VITE_REACT_APP_API_BASEURL 

    // simple validation with Yup
    let validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Min password len is 6 char'),
    })

    // initial values, validationSchema & handleSubmit form using formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            axios.post(`${API_BASEURL}/users/login`, values)
            .then(res => console.log(res.data))
        }

    })



    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // function handleLogin(e) {
    //     e.preventDefault()
    //     if (email === '' || password === '') {
    //         toast.error('Login failed', {
    //             description: 'Kindly enter a valid value for both email and password'
    //         })
    //         return
    //     }

    // }
    return (
        <div className='container w-full h-screen flex items-center flex-col justify-center'>
            <div className='md:w-64'>
                <h2 className='text-3xl md:text-5xl mb-4 text-center font-bold'>Login</h2>
                <form action="" className='flex space-y-4 flex-col mb-4' onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            className='border focus:outline-none rounded-md py-2 px-6 block'
                            placeholder='Enter your email'
                        />
                        {formik.touched.email && formik.errors.email ? (<p className='text-red-500 text-sm my-0'>{formik.errors.email}</p>) : null}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='border focus:outline-none rounded-md py-2 px-6 block'
                            placeholder='Enter your password'
                        />
                        {formik.touched.password && formik.errors.password ? (<p className='text-red-500 text-sm my-0'>{formik.errors.password}</p>) : null}
                    </div>
                    <button
                        className='w-full bg-gray-700 text-white hover:bg-gray-900 py-2 rounded-md'
                        type='submit'
                    >Login</button>
                </form>
                <p className='relative overflow-hidden text-center w-full text-gray-950 mb-4 text-xl
                before:w-1/2 before:h-0.5 before:block before:bg-gray-400 before:absolute before:top-1/2 before:transform before:-translate-x-4.5
                after:w-1/2 after:h-0.5 after:block after:bg-gray-400 after:absolute after:top-1/2 after:transform after:translate-x-full after:ml-4.5 '
                >or</p>
                <button className='w-full px-6 py-2 rounded-md bg-gray-900 hover:bg-gray-950 text-white mb-2'>Continue with Google</button>
                <p>Don't have an account? <Link to='/signup' className='text-blue-500'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
