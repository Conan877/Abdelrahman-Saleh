import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm text-white p-4 sticky top-0 z-50 shadow-lg border-b border-gray-700/50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold tracking-tight text-blue-300 hover:text-blue-200 transition duration-300 cursor-pointer" onClick={() => scrollToSection('hero')}>
          Abdelrahman Saleh
        </h1>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition duration-300 font-medium">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition duration-300 font-medium">Skills</button>
          <button onClick={() => scrollToSection('certificates')} className="text-gray-300 hover:text-white transition duration-300 font-medium">Certificates</button>
          <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition duration-300 font-medium">Education</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition duration-300 font-medium">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;