import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Handle form submission logic here
    try {
      const user = await dispatch(loginUser(formData));
      console.log("user", user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[100px] overflow-hidden bg-gradient-to-br p-8 rounded-lg from-primary via-purple-600 to-pink-500 w-[400px]">
      <h2 className="font-[Poppins] text-white text-5xl text-center">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto max-w-lg border-b py-5 border-purple-400 rounded-sm"
      >
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
            className="w-full p-2 text-black placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full text-black p-2 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign in
        </button>
      </form>
      <div className="py-5 flex gap-2 flex-col text-center items-center">
        <Link
          to="/auth/forgotten-password"
          className="font-semibold text-white hover:border-b border-white "
        >
          Forgotten password?
        </Link>
        <Link
          to="/auth/sign-up"
          className="font-semibold text-white  hover:border-b border-white"
        >
          Didn't have an account? <span>Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
