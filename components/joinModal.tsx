import React, { useState } from "react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/usersJoin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create user");
      }

      alert("User created successfully!");
      setFormData({ username: "", email: "", password: "" });
      onClose();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative text-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <div className="mb-4 flex flex-col items-center">
          <img src="/Stays.png" alt="Stays Logo" className="w-20 mb-2" />
          <h2 className="text-xl font-bold">Create An Account:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mb-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mb-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className={`w-full bg-green-500 text-white py-2 rounded ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Join With Email"}
          </button>
        </form>
        {error && <p className="mt-2 text-red-500">{error}</p>}
        <p className="my-4 text-gray-600">Or Connect With</p>
        <div className="flex justify-center gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">G</span> Google
          </button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">T</span> Twitter
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">F</span> Facebook
          </button>
        </div>
        <p className="mt-4 text-gray-600">
          Already a member?{" "}
          <a href="#" className="text-blue-500">
            Click Here
          </a>{" "}
          to login.
        </p>
      </div>
    </div>
  );
};

export default JoinModal;
