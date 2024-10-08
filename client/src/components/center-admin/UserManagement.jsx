// src/components/Dashboard/UserManagement.jsx
import React from "react";

const UserManagement = ({ users, onActivate, onDeactivate, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 text-left">Name</th>
              <th className="border-b p-2 text-left">Email</th>
              <th className="border-b p-2 text-left">Status</th>
              <th className="border-b p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.active ? "Active" : "Inactive"}</td>
                <td className="p-2">
                  {user.active ? (
                    <button
                      onClick={() => onDeactivate(user.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => onActivate(user.id)}
                      className="bg-green-500 text-white px-4 py-1 rounded"
                    >
                      Activate
                    </button>
                  )}
                  <button
                    onClick={() => onDelete(user.id)}
                    className="bg-gray-300 text-gray-700 px-4 py-1 rounded ml-2"
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

export default UserManagement;
