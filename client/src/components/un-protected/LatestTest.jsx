import { latestTest } from "../../assets/data";
import { Link } from "react-router-dom";

const LatestTest = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
      {latestTest.map((test, index) => (
        <Link
          key={index}
          to={`/tests/${test.id}`}
          aria-label={`Go to ${test.title}`}
          className="w-full"
        >
          <div className="w-full h-[300px] bg-primary hover:bg-indigo-400 rounded-lg flex items-center justify-center text-white transition duration-300 transform hover:scale-105 shadow-lg">
            <span className="text-xl font-semibold">{test.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestTest;
