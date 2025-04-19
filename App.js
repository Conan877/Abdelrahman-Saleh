import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Import your main CSS file

function App() {
  useEffect(() => {
    document.title = "Abdelrahman Saleh | Business Analyst & Data Engineer";
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #a8a8a8; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #888; }
        ::-webkit-scrollbar-corner { background: #f1f1f1; }
        body { scrollbar-width: thin; scrollbar-color: #a8a8a8 #f1f1f1; }
        body { font-family: 'Inter', sans-serif; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}

export default App;