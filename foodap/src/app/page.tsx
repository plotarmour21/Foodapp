"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FaUtensils,
  FaUser,
  FaHome,
  FaListAlt,
  FaInfoCircle,
  FaPhone,
  FaBars,
} from "react-icons/fa";
import Footer from "@/app/Footer";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 animate-bounce flex items-center justify-center gap-2">
            FoodApp
          </h1>
          <nav>
            <div className="hidden lg:flex space-x-4 gap-2">
              <a
                href="#"
                className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
              >
                <FaHome /> Home
              </a>
              <a
                href="#"
                className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
              >
                <FaListAlt /> Menu
              </a>
              <a
                href="#"
                className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
              >
                <FaInfoCircle /> About
              </a>
              <a
                href="#"
                className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
              >
                <FaPhone /> Contact
              </a>
              <a
                href="#"
                className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
              >
                <FaUser /> Login
              </a>
            </div>
            <div className="lg:hidden">
              <button
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars />
              </button>
              {menuOpen && (
                <ul className="flex flex-col space-y-2 mt-2">
                  <li>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                    >
                      <FaHome /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                    >
                      <FaListAlt /> Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                    >
                      <FaInfoCircle /> About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                    >
                      <FaPhone /> Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                    >
                      <FaUser /> Login
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </header>
        <main className="mt-8">
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-white animate-pulse">
              Welcome to FoodApp
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Discover the best food from our menu and enjoy delicious meals.
            </p>
            <Button variant="default" className="animate-bounce">
              Order Now
            </Button>
          </section>
          <section className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Our Specialties
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border p-4 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Specialty 1"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  Specialty 1
                </h4>
                <p className="text-gray-600">Description of specialty 1.</p>
              </div>
              <div className="border p-4 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1542367592-8849eb950fd8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Specialty 2"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  Specialty 2 <FaUtensils />
                </h4>
                <p className="text-gray-600">Description of specialty 2.</p>
              </div>
              <div className="border p-4 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Specialty 3"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  Specialty 3 <FaUtensils />
                </h4>
                <p className="text-gray-600">Description of specialty 3.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
