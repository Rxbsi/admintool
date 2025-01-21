import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUsers() {


    let navigate = useNavigate();

    const [user, setUser] = useState({
        username:"",
        name:"",
        lastName:"",
        email:""
    });

    const{username, name, lastName, email} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:8080/api/user/create", user);
        navigate("/");
    };

  return (
    <div className="container mx-auto">
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 border rounded p-4 mt-4 shadow-lg">
                <h2 className='text-center m-4'>Register User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
                        <input 
                            type="text" 
                            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder='Enter Username'
                            name='username'
                            value={username}
                            onChange={(e)=>onInputChange(e)}
                            />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                        <input 
                            type="text" 
                            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder='Enter Name'
                            name='name'
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                            />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
                        <input 
                            type="text" 
                            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder='Enter Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={(e)=>onInputChange(e)}
                            />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                        <input 
                            type="email" 
                            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder='Enter Email'
                            name='email'
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                            />
                    </div>
                    <button 
                        type="submit" 
                        className="px-4 py-2 border border-green-500 text-green-500
                        font-semibold rounded hover:bg-green-500 hover:text-white transition duration-200"
                        >
                        Submit
                    </button>
                    <Link
                        to={"/"}
                        className="px-4 py-2 border border-red-500 text-red-500
                        font-semibold rounded hover:bg-red-500 hover:text-white transition duration-200 mx-2"
                        >
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>

  )
}
