import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import axios from 'axios';

export default function Home() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/user/users")
    setUsers(result.data);
  }

  return (
    <div className='container mx-auto mt-4'>
        <div className='py-4'>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium text-gray-700 uppercase">#</th>
                  <th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium text-gray-700 uppercase">UserName</th>
                  <th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium text-gray-700 uppercase">Name</th>
                  <th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium text-gray-700 uppercase">Last Name</th>
                  <th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium text-gray-700 uppercase">Email</th>
                  <th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => (
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-700" key={index}>{index+1}</td>
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-700">{user.username}</td>
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-700">{user.name}</td>
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-700">{user.lastName}</td>
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-700">{user.email}</td>
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-700">
                        <button className="text-green-500 hover:underline"><FaEye /></button>
                        <button className="text-blue-500 hover:underline ml-4"><FaEdit /></button>
                        <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
