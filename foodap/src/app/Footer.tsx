import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-6 mt-12 z-50 w-full">
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg mb-4">© 2023 FoodApp. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-200">
            Follow us on:
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
