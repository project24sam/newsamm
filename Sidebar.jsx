import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-300 p-6 shadow-sm">
      <h1 className="text-3xl font-bold mb-8 text-black">Pulse</h1>
      <nav className="space-y-4 text-lg">
        <a href="#" className="block text-gray-800 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="block text-blue-600 font-semibold">Projects</a>
        <a href="#" className="block text-gray-800 hover:text-blue-600">Dashboards</a>
        <hr className="my-4 border-gray-200" />
        <a href="#" className="block text-gray-800 hover:text-blue-600">Documentations</a>
        <a href="#" className="block text-gray-800 hover:text-blue-600">Compliance</a>
      </nav>
    </div>
  );
}
