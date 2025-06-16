import React, { useState } from 'react';
import { FaChartLine, FaUserTie, FaBrain } from 'react-icons/fa';

const ResumeSection = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      {/* Right Side Button + Roles */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:flex flex-col space-y-3 text-right text-sm text-gray-400 font-semibold">
        <div className="flex items-center gap-2">
        <button
          onClick={() => setShowResume(true)}
          className="inline-block bg-yellow-300 text-black px-4 py-2 rounded-full font-bold text-xs hover:bg-lime-400 transition-colors duration-300 mb-2 self-end"
        >
          View Resume
        </button>
        </div>
        <div className="flex items-center gap-2">
          <FaChartLine className="text-yellow-400" />
          <span>Data Analyst</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserTie className="text-blue-400" />
          <span>Business Analyst</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBrain className="text-green-400" />
          <span>Business Intelligence</span>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6">
          <div className="relative bg-white max-w-4xl w-full h-[90vh] rounded-lg shadow-lg overflow-hidden">

            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-2 text-black hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeSection;
