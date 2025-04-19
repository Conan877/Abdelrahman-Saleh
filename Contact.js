import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <MessageSquare className="h-8 w-8 text-blue-300" /> Get In Touch
          </h2>
          <p className="text-lg text-gray-300/90 mb-12 max-w-xl mx-auto leading-relaxed">
            I'm actively seeking new opportunities and collaborations where I can leverage my skills in data analysis and business intelligence. Let's connect!
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-x-10 gap-y-8">
            <a href="mailto:abdouessam60@gmail.com" className="flex items-center space-x-3 group transition duration-300 transform hover:scale-105 hover:text-blue-300">
              <Mail className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-lg">abdouessam60@gmail.com</span>
            </a>
            <div className="flex items-center space-x-3 group text-gray-300">
              <Phone className="h-6 w-6 text-blue-400" />
              <span className="text-lg">01060468265</span>
            </div>
            <a href="https://linkedin.com/in/abdelrahman-salehx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group transition duration-300 transform hover:scale-105 hover:text-blue-300">
              <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-lg">LinkedIn Profile</span>
            </a>
            <div className="flex items-center space-x-3 group text-gray-300">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="text-lg">Cairo, Egypt</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;