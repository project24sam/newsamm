import React from 'react';

const mockData = [
  {
    id: 1,
    name: 'Gabriela Christiansen',
    score: 90,
    reports: [
      { id: 11, name: 'John Smith', score: 82 },
      { id: 12, name: 'Alice Wong', score: 76 },
    ],
  },
  {
    id: 2,
    name: 'Halle Griffiths',
    score: 83,
    reports: [
      { id: 21, name: 'Evan Hart', score: 79 },
    ],
  },
];

export default function ProjectsPanel({ onSelectUser }) {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {mockData.map(manager => (
          <div key={manager.id} className="bg-white rounded-xl shadow p-4 space-y-3">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition"
              onClick={() => onSelectUser && onSelectUser(manager)}
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">{manager.name}</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
              <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium">
                {manager.score}
              </span>
            </div>
            <div className="pl-4 space-y-2">
              {manager.reports.map(report => (
                <div
                  key={report.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-md cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => onSelectUser && onSelectUser(report)}
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">{report.name}</p>
                    <p className="text-xs text-gray-500">Team Member</p>
                  </div>
                  <span className="bg-gray-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">
                    {report.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
