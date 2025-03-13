import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up with", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-4">





        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">LastName</label>
            <input
              type="lastname"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>




          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
