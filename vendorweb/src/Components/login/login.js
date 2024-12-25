import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Ensure jwtDecode is imported

const Login = () => {
  const [owneremail, setOwnerEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/VRegistration/auth", {
        owneremail,
        password,
      });
      if (response.status === 200) {
        const userData = jwtDecode(response.data.accessToken);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("email", userData.owneremail);
        localStorage.setItem("vendor_id", userData.vendor_id);
        localStorage.setItem("phone_no", userData.phone_no);
        localStorage.setItem("imageurl", userData.imageurl);
        localStorage.setItem("address", userData.address);

        // Navigate to the home page after successful login
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setErrorMessage("Email not found.");
            break;
          case 401:
            setErrorMessage("Incorrect password. Please try again.");
            break;
          default:
            setErrorMessage("An error occurred while logging in. Please try again later.");
        }
      } else if (error.request) {
        setErrorMessage("Network error. Please check your connection.");
      } else {
        setErrorMessage("Unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to Pickout</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="owneremail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="owneremail"
              name="owneremail"
              placeholder="Enter your email"
              value={owneremail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => console.log("Forgot password clicked")}
            >
              Forgot your password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
