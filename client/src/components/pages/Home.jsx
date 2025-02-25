import React from 'react'
import { Link } from 'react-router'

export default function Home() {
    return (
        <div className='container'>
            <div className="w-full h-screen text-center flex flex-col items-center justify-center">
                <div>
                    <h1 className='text-5xl font-bold text-center mb-2 '>Welcome to Task Pilot</h1>
                    <p className='mb-4'>Manage your priorities with ease. Be 100 effective</p>
                    <Link 
                    to='/login'
                    className='border py-2 px-6 rounded-lg hover:bg-gray-900 hover:text-white'
                    >Get Started</Link>
                </div>
            </div>
        </div>
    )
}
