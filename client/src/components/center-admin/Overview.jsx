const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {/* overview of active users */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">Active Students</h3>
        <p className="text-3xl text-blue-600">5</p>
        <p className="text-gray-500">Total active students in your center</p>
      </div>
      {/* overview of tests */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">Total Tests</h3>
        <p className="text-3xl text-blue-600">5</p>
        <p className="text-gray-500">Total tests created</p>
      </div>
      {/* overview of  instructor*/}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">Instructors</h3>
        <p className="text-3xl text-blue-600">5</p>
        <p className="text-gray-500">Total instructors assigned</p>
      </div>
    </div>
  );
};

export default Overview;
