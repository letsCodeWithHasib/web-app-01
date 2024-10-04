import { latestTest } from "../../assets/data";
import { Link } from "react-router-dom";

const LatestTest = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
      {latestTest.map((test, index) => (
        <Link key={index} to={`/tests/${test.id}`}>
          <div className="w-[300px] h-[300px] bg-primary hover:bg-indigo-400 rounded-lg flex items-center justify-center text-white">
            {test.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestTest;
