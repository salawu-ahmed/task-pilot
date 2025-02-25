import React from 'react'
import { Link } from 'react-router'

function Login() {
    return (
        <div>
            <form action="">
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <button>Login</button>
            </form>
            <button>Continue with Google</button>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
    )
}

export default Login
