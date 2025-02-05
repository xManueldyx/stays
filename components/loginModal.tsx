import Link from "next/link";
import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
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
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
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
        <div className="mt-6">
          <p className="text-center text-sm font-medium text-gray-500 mb-4">
            Or Sign in With:
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span>Google</span>
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span>Twitter</span>
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
