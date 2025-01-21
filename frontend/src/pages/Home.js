import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

  const [users, setUsers] = useState([])
  const {id} = useParams();

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/user/users")
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/user/delete/${id}`)
    loadUsers();
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
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded mx-2 hover:bg-blue-600">View</Link>
                        <Link className="border border-blue-500 text-blue-500 bg-transparent px-4 py-2 rounded mx-2 hover:bg-blue-500 hover:text-white"
                              to={`/editUser/${user.id}`}>Edit</Link>
                        <Link className="bg-red-500 text-white px-4 py-2 rounded mx-2 hover:bg-red-600"
                              onClick={() => deleteUser(user.id)}>Delete</Link>
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
