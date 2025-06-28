import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur-md ">
      <div className="max-w-5xl mx-auto py-6 px-4 text-center text-gray-600">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Osvaldo Santillan Jimenez. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-500">
          Built with passion and dedication.
        </p>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <a
            href="https://github.com/Osvaldohb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/osvaldosantillanjimenez/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
