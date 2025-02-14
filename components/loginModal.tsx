import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/usersLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to login");
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("token", result.token);
      }

      alert("Login successful!");
      onClose();

      router.push("/dashboard");
    } catch (err: any) {
      if (err.name === "TypeError") {
        setError("Network error, please try again.");
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center mb-6">
          <img
            src="/Stays-logo.png"
            alt="Stays Logo"
            className="mx-auto h-16 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">Stays</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-green-500 text-white py-2 rounded-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            } transition`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
        <div className="text-center mt-4">
          <p className="text-sm">
            Not a member yet?{" "}
            <Link href="/" className="text-blue-500 hover:underline cursor-pointer">
              Join Now
            </Link>
          </p>
          <p className="text-sm mt-2">
            Forgot your password?{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Click here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
