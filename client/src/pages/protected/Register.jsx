import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/authSlice";
import { FaCheckCircle } from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "", // Mobile number field
    password: "",
    confirm: "",
    role: "student",
    branch: "gurugram",
    centerId: "", // Added center ID field
  });
  const [registrationMessage, setRegistrationMessage] = useState(false);

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
      setRegistrationMessage(""); // Reset message state
      try {
        await dispatch(registerUser(formData)).unwrap();
        // Set registration message after successful registration
        setRegistrationMessage(true);
      } catch (error) {
        console.log(error, "from");
      }
    },
    [dispatch, formData]
  );

  return (
    <div>
      {registrationMessage ? (
        <div className="overflow-hidden max-w-xl mt-[100px] text-center p-5 bg-gradient-to-br rounded-lg from-primary via-purple-600 to-pink-500">
          <div className="flex justify-center mt-5">
            <span>
              <FaCheckCircle className="text-7xl" />
            </span>
          </div>
          <h2 className="text-4xl font-[Poppins] mt-5">
            Registration Succesful
          </h2>
          <p className="text-lg my-5">
            You are registered! We are validating your account. <br /> You will
            receive an SMS or email notification once verified.
          </p>
        </div>
      ) : (
        <div>
          <div className="overflow-hidden bg-gradient-to-br rounded-lg from-primary via-purple-600 to-pink-500">
            <h2 className="font-[Poppins] text-white text-5xl text-center mt-5">
              Register
            </h2>
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-lg shadow-md w-full mx-auto max-w-lg"
            >
              <div className="mb-4 flex gap-5">
                {/* First Name */}
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
                {/* Last Name */}
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
              {/* Email */}
              <fieldset className="mb-4">
                <label
                  className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </fieldset>
              {/* Mobile Number */}
              <fieldset className="mb-4">
                <label
                  className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="1234567890"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full p-2 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </fieldset>
              {/* Center ID */}
              <fieldset className="mb-4">
                <label
                  className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                  htmlFor="centerId"
                >
                  Center ID
                </label>
                <input
                  type="text"
                  id="centerId"
                  name="centerId"
                  placeholder="Enter Center ID"
                  value={formData.centerId}
                  onChange={handleChange}
                  required
                  className="w-full p-2 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </fieldset>
              {/* Password */}
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
              {/* Confirm Password */}
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
                  className="mt-1 block w-full text-black p-2 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </fieldset>

              <div className="mb-4 flex gap-5">
                {/* Role */}
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
                {/* Select Branch */}
                <fieldset className="mb-4 w-full">
                  <label
                    className="text-sm font-[Roboto] text-white font-medium cursor-pointer"
                    htmlFor="branch"
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
                className="w-full uppercase font[Roboto] border-white hover:border-none border text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
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
      )}
    </div>
  );
};

export default Register;
