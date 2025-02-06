"use client";

import React, { useState } from "react";
import JoinModal from "../components/joinModal";
import LoginModal from "../components/loginModal";
import Link from "next/link";

export default function HomePage() {
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openJoinModal = () => setJoinModalOpen(true);
  const closeJoinModal = () => setJoinModalOpen(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/home-medium.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-5 z-0 pointer-events-none" ></div>

      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-20">
        <Link href="/" className="text-white text-2xl font-bold">Stays</Link>
        <div className="flex space-x-4">
          <button
            onClick={openJoinModal}
            className="text-white hover:text-green-500 transition"
          >
            Join
          </button>
          <button
            onClick={openLoginModal}
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Login
          </button>
          
        </div>
      </header>

      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      <main className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <h1 className="text-4xl md:text-3xl font-bold mb-4 py-10">
          Your Source For The Natural World's Most Inspiring Visuals.
        </h1>
        <p className="text-lg md:text-0.2xl mb-8">
          We are the convergence where storytellers, the natural world, and the
          ability to create powerful change collide.
        </p>
        <div className="flex w-full max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="What are you searching for?"
            className="flex-grow px-4 py-3 rounded-l-lg text-black focus:outline-none"
          />
          <select className="bg-white px-4 py-3 text-black border-l border-gray-300">
            <option value="stills">STILLS</option>
            <option value="videos">MOTIONS</option>
          </select>
          <button className="bg-green-500 text-white px-6 py-3 rounded-r-lg hover:bg-green-600 transition">
            Search
          </button>
        </div>
        <p className="text-lg mb-4">Or, Start Exploring!</p>
        <button className="bg-green-500 px-8 py-3 text-white text-lg rounded hover:bg-green-600 transition">
          Explore
        </button>
      </main>
    </div>
  );
}
