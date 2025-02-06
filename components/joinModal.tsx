import React, { useState } from "react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Join With Email
          </button>
        </form>
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
