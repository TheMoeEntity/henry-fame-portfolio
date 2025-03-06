"use client";
import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate login logic (replace with actual API call)
    if (username === "admin" && password === "admin123") {
      setError("");
      alert("Login successful!");
      // Redirect or perform other actions here
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <main className="w-full flex justify-center items-center h-screen">
      <form
        className="container bg-[#222221] mx-auto max-w-sm rounded-3xl text-white min-h-56 p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center mb-8">Admin Sign In</h1>

        {/* Username Field */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#333332] text-white focus:outline-none focus:ring-2 focus:ring-[#14AFF1]"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#333332] text-white focus:outline-none focus:ring-2 focus:ring-[#14AFF1]"
            placeholder="Enter your password"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#14AFF1] text-white py-2 rounded-lg hover:bg-[#0F8AC0] transition-colors duration-300"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default SignIn;
