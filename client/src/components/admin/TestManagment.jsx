// src/components/Dashboard/TestManagement.jsx
import React from "react";

const TestManagement = ({ tests, onEdit, onDelete, onViewResults }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl mb-4">Test Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 text-left">Title</th>
              <th className="border-b p-2 text-left">Description</th>
              <th className="border-b p-2 text-left">Created On</th>
              <th className="border-b p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{test.title}</td>
                <td className="p-2">{test.description}</td>
                <td className="p-2">
                  {new Date(test.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => onEdit(test.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onViewResults(test.id)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded ml-2"
                  >
                    View Results
                  </button>
                  <button
                    onClick={() => onDelete(test.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestManagement;
