"use client";

import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, User, HelpCircle, LogOut } from "lucide-react";
export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Stays</span>
        </div>
        <div className="flex space-x-6" >
          <a href="#" className="hover:underline py-2">
            Dashboard
          </a>
          <a href="#" className="hover:underline py-2">
            Explore
          </a>
          <a href="#" className="hover:underline py-2">
            Cart
          </a>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center gap-2 p-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 bg-transparent">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span>User</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border"
                align="start"
              >
                <DropdownMenu.Item className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  Account details
                </DropdownMenu.Item>

                <DropdownMenu.Item className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="h-px bg-gray-300 my-1" />

                <DropdownMenu.Item className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>

      <div className="bg-white shadow-md p-4 flex justify-center items-center space-x-4">
        <button className="text-green-600 font-semibold border-b-2 border-green-600">
          Stills
        </button>
        <button className="text-gray-500">Motion</button>
        <button className="text-gray-500">Filters</button>
        <input
          type="text"
          placeholder="Search - Stills"
          className="border border-gray-300 p-2 rounded w-1/3"
        />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/fox.jpg"
          alt="Fox"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl font-bold">
            Search Amazing Still Photography
          </h1>
          <p className="text-lg">Captured Around The Globe</p>
        </div>
      </div>
    </div>
  );
}
