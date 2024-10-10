import React, { useState, useEffect } from "react";
import Overview from "../../components/center-admin/Overview";
import UserManagement from "../../components/center-admin/UserManagement";
import TestManagement from "../../components/center-admin/TestManagment";
import Reporting from "../../components/center-admin/Reporting";
import api from "../../api/api";

const CentreAdminDashboard = () => {
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

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/centre-admin/dashboard");
        console.log(response);
      } catch (error) {
        console.log("er", error);
      }
    })();
  }, []);

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
      <Overview />
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

export default CentreAdminDashboard;
