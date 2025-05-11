import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ProjectsPanel from './components/ProjectsPanel.jsx';
import DetailsPanel from './components/DetailsPanel.jsx';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen font-urbanist text-black bg-gray-100">
      <Sidebar />
      <ProjectsPanel onSelectUser={setSelectedUser} />
      <DetailsPanel user={selectedUser} />
    </div>
  );
}
