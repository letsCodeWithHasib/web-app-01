import React, { useState } from "react";
import Overview from "./Overview";
import UserManagement from "./UserManagement";
import TestManagement from "./TestManagment";
import Reporting from "./Reporting";

const CenterAdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", active: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", active: false },
  ]);

  const [tests, setTests] = useState([
    {
      id: 1,
      title: "Math Test",
      description: "Basic Math",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      title: "Science Test",
      description: "Basic Science",
      createdAt: "2024-02-01",
    },
  ]);

  const stats = [
    {
      title: "Active Students",
      value: users.filter((u) => u.active).length,
      description: "Total active students in your center",
    },
    {
      title: "Active Tests",
      value: tests.length,
      description: "Total tests created",
    },
    {
      title: "Instructors",
      value: "10",
      description: "Total instructors assigned",
    },
  ];

  const handleActivate = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, active: true } : user))
    );
  };

  const handleDeactivate = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, active: false } : user))
    );
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditTest = (id) => {
    // Logic for editing a test
  };

  const handleDeleteTest = (id) => {
    setTests(tests.filter((test) => test.id !== id));
  };

  const handleGenerateReport = () => {
    // Logic for generating reports
    console.log("Generating report...");
  };

  return (
    <div className="p-4">
      <Overview stats={stats} />
      <UserManagement
        users={users}
        onActivate={handleActivate}
        onDeactivate={handleDeactivate}
        onDelete={handleDeleteUser}
      />
      <TestManagement
        tests={tests}
        onEdit={handleEditTest}
        onDelete={handleDeleteTest}
        onViewResults={() => {
          /* Logic to view results */
        }}
      />
      <Reporting onGenerateReport={handleGenerateReport} />
    </div>
  );
};

export default CenterAdminDashboard;
