import React from "react";

const SignupPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Username"
          className="block p-2 mb-2 w-full border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="block p-2 mb-2 w-full border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="block p-2 mb-2 w-full border border-gray-300 rounded"
        />
        <button className="bg-green-500 text-white p-2 w-full rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
