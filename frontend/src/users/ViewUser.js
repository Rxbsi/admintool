import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user, setUser] = useState({
        name:"",
        lastName:"",
        username:"",
        email:""
    });

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/user/byId/${id}`)
        setUser(result.data);
    };

  return (
    <div className="container mx-auto">
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 border rounded p-4 mt-4 shadow-lg">
                <div className="bg-white shadow-md rounded-lg border border-gray-200">
                    <div className="p-4 border-b border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800">Details of user id: {user.id}</h2>
                    </div>
                    <ul className="divide-y divide-gray-300">
                        <li className="px-4 py-2">
                            <b className="font-medium">Username: </b>
                            {user.username}
                        </li>
                        <li className="px-4 py-2">
                            <b className="font-medium">Name: </b>
                            {user.name}
                        </li>
                        <li className="px-4 py-2">
                            <b className="font-medium">Last Name: </b>
                            {user.lastName}
                        </li>
                        <li className="px-4 py-2">
                            <b className="font-medium">E-Mail: </b>
                            {user.email}
                        </li>
                    </ul>
                </div>
                <div className="text-center mt-4">
                    <Link
                        to={"/"}
                        className="px-4 py-2 border border-red-500 text-red-500
                        font-semibold rounded hover:bg-red-500 hover:text-white transition duration-200 mx-2"
                        >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
