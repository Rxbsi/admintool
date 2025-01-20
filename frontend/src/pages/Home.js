import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Home() {
  return (
    <div className='container mx-auto mt-4'>
        <div className='py-4'>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700 uppercase">#</th>
                  <th class="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700 uppercase">Name</th>
                  <th class="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700 uppercase">Email</th>
                  <th class="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700 uppercase">Role</th>
                  <th class="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white hover:bg-gray-100">
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">1</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">Max Mustermann</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">max@example.com</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">Admin</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">
                    <button class="text-blue-500 hover:underline"><FaEdit /></button>
                    <button class="text-red-500 hover:underline ml-4"><FaTrash /></button>
                  </td>
                </tr>
                <tr class="bg-gray-50 hover:bg-gray-100">
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">2</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">Jane Doe</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">jane@example.com</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">User</td>
                  <td class="px-6 py-4 border border-gray-300 text-sm text-gray-700">
                    <button class="text-blue-500 hover:underline"><FaEdit /></button>
                    <button class="text-red-500 hover:underline ml-4"><FaTrash /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
