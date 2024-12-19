import React, { useState } from "react";
import {jwtDecode} from 'jwt-decode'; // Ensure proper import
import axios from 'axios'; // Ensure axios is imported correctly
import { useNavigate } from "react-router-dom";
import logoimage from "../images/orders.png"; // Adjust the path if required

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      
      if (response.status === 200) {
        const userData = jwtDecode(response.data.accessToken);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("customer_id", userData.customer_id);
        localStorage.setItem("phone_no", userData.phone_no);
        localStorage.setItem("imageurl", userData.imageurl);
        localStorage.setItem("address", userData.address);

        // Navigate to home page after successful login
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setErrorMessage("Email not found.");
            // setTimeout(() => navigate("/SignupPage"), 2000); // Corrected navigation route
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-lg shadow-lg">
        <div className="hidden md:flex md:w-1/2 h-full items-center justify-center bg-white-200">
          <img
            src={logoimage}
            alt="Phone Screen"
            className="w-3/4 h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome Back to Pickout!
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Sign in to continue exploring Street food .
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-3 mb-3 w-full border border-gray-300 rounded bg-gray-50"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block p-3 mb-3 w-full border border-gray-300 rounded bg-gray-50"
              required
            />
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => alert("Forgot password functionality coming soon!")}
                className="text-green-500 text-sm underline"
              >
                Forgot your password?
              </button>
            </div>
            <button className="bg-green-500 text-white py-3 px-6 w-full rounded font-medium hover:bg-green-600">
              LOGIN
            </button>
          </form>
          {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
