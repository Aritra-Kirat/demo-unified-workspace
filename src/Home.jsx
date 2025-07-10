import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat -z-10"></div>
      <div className="absolute inset-0 backdrop-blur-md -z-10"></div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl shadow-2xl text-center w-full max-w-5xl z-10 transform -translate-y-2">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-12">
          Unified Workspace
        </h1>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Explore our color palette and design system for a cohesive workspace experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link to="/login" className="transform hover:scale-105 transition duration-300">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span className="font-medium">Login</span>
            </button>
          </Link>
          <Link to="/registration" className="transform hover:scale-105 transition duration-300">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span className="font-medium">Register</span>
            </button>
          </Link>
          <Link to="/tool-connection" className="transform hover:scale-105 transition duration-300">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">Connect Tools</span>
            </button>
          </Link>
          <Link to="/canvas" className="transform hover:scale-105 transition duration-300">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Canvas</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
