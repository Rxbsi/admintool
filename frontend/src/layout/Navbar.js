import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="bg-green-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <Link
                        to="/"
                        className="text-white text-lg font-bold">
                        Admin-Tool
                    </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                    <Link
                        to="/addUser"
                        className="text-white border-2 border-white rounded-md px-4 py-2 text-sm font-medium hover:bg-white hover:text-green-500">
                        Add User
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>

  )
}
