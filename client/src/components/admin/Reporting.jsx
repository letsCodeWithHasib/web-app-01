// src/components/Dashboard/Reporting.jsx
import React from "react";

const Reporting = ({ onGenerateReport }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl mb-4">Reporting</h2>
      <button
        onClick={onGenerateReport}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Generate Reports
      </button>
    </div>
  );
};

export default Reporting;
