import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 p-6 text-center text-sm border-t border-gray-800/50">
      <div className="container mx-auto">
        © {new Date().getFullYear()} Abdelrahman Saleh. All rights reserved.
        <p className="mt-2 text-xs">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;