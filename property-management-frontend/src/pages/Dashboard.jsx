import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">🏠 PropertyManager</h1>
          <div className="space-x-4">
            <Link to="/tenants" className="text-gray-600 hover:text-blue-600 font-medium">Tenants</Link>
            <Link to="/properties" className="text-gray-600 hover:text-blue-600 font-medium">Properties</Link>
            <Link to="/settings" className="text-gray-600 hover:text-blue-600 font-medium">Settings</Link>
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Log Out
            </button>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to your Dashboard</h2>
          <p className="text-gray-600">Track your properties, manage tenants, and stay organized.</p>
        </div>
      </main>
    </div>
  );
}
