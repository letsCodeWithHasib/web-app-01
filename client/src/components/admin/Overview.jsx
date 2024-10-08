// src/components/Dashboard/Overview.jsx
import React from "react";

const Overview = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{stat.title}</h3>
          <p className="text-3xl text-blue-600">{stat.value}</p>
          <p className="text-gray-500">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
