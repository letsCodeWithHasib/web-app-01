import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    role: "student",
    branch: "gurugram",
  });

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await dispatch(registerUser(formData)).unwrap();
      } catch (error) {
        console.log(error, "from");
      }
    },
    [dispatch, formData]
  );
  return (
    <div>
      <div className="overflow-hidden bg-gradient-to-br rounded-lg from-primary via-purple-600 to-pink-500">
        <h2 className="font-[Poppins]  text-white text-5xl text-center mt-5">
          Register
        </h2>
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg shadow-md w-full mx-auto max-w-lg "
        >
          <div className="mb-4 flex gap-5">
            {/* first name */}
            <fieldset>
              <label
                className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Mohd"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 text-black rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </fieldset>
            {/* last name */}
            <fieldset>
              <label
                className="text-sm font-[Roboto] text-white font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Hasib"
                className="w-full p-2 text-black placeholder:text-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </fieldset>
          </div>
          {/* email */}
          <fieldset className="mb-4">
            <label
              className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="your@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          {/* password */}

          <fieldset className="mb-4">
            <label
              className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full text-black p-2 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>
          {/* confirm */}
          <fieldset className="mb-4">
            <label
              className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              placeholder="********"
              required
              className="mt-1 block w-full text-black p-2  placeholder:text-gray-400  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <div className="mb-4 flex gap-5">
            {/* role */}
            <fieldset className="mb-4 w-full">
              <label
                className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                htmlFor="role"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block text-black w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="company">Company</option>
              </select>
            </fieldset>
            {/* centres */}
            <fieldset className="mb-4 w-full">
              <label
                className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                htmlFor="role"
              >
                Select Branch
              </label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="mt-1 block text-black w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="gurugram">Gurugram</option>
                <option value="noida sec-16">Noida sec-16</option>
                <option value="noida sec-63">Noida sec-63</option>
                <option value="faridabad">Faridabad</option>
                <option value="janakpuri">Janakpuri</option>
                <option value="south Ex">South Ex</option>
                <option value="pitampura">Pitampura</option>
              </select>
            </fieldset>
          </div>

          <button
            type="submit"
            className="w-full uppercase font[Roboto] borer-white hover:border-none border text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
      <div className="text-center mt-5">
        <span className="text-primary">
          Already have an account?{" "}
          <Link to="/auth/sign-in" className="ml-1 font-bold underline">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
