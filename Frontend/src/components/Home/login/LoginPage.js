import React from "react";
import logoimage from "../images/orders.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-lg shadow-lg">
        {/* Left Side: Image */}
        <div className="hidden md:flex md:w-1/2 h-full items-center justify-center bg-gray-200">
          <img
            src={logoimage}
            alt="Phone Screen"
            className="w-3/4 h-auto object-contain"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome Back!
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Sign in to continue exploring amazing opportunities.
          </p>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="block p-3 mb-3 w-full border border-gray-300 rounded bg-gray-50"
            />
            <input
              type="password"
              placeholder="Password"
              className="block p-3 mb-3 w-full border border-gray-300 rounded bg-gray-50"
            />
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => {
                  // Add your "forgot password" functionality here
                  console.log("Forgot password clicked");
                }}
                className="text-green-500 text-sm underline"
              >
                Forgot your password?
              </button>
            </div>
            <button className="bg-green-500 text-white py-3 px-6 w-full rounded font-medium hover:bg-green-600">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
