import React from 'react';

export default function DetailsPanel({ user }) {
  return (
    <div className="w-80 bg-white border-l border-gray-300 p-6 shadow-sm">
      {user ? (
        <div>
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-1">Role: {user.reports ? 'Manager' : 'Team Member'}</p>
          <p className="text-gray-600 mb-1">Score: {user.score}</p>
          <p className="text-gray-500 mt-2">This panel can be expanded with more details, actions, tabs, etc.</p>
        </div>
      ) : (
        <p className="text-gray-400 italic">Select a user to view details</p>
      )}
    </div>
  );
}
