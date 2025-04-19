import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    { name: "Azure Data Factory For Data Engineers", issuer: "Udemy", date: "(Expected Completion: 09/2024)", link: null },
    { name: "Data Challenger Track", issuer: "Udacity", date: "", link: null },
    { name: "Database Fundamentals", issuer: "ITI", date: "", link: null },
    { name: "UX Design Fundamentals", issuer: "ITI", date: "", link: null },
    { name: "SQL (Intermediate)", issuer: "HackerRank", date: "", link: "https://www.hackerrank.com/certificates/..." },
  ];

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 bg-gray-100">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-blue-600" /> Certifications & Training
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/80 flex items-start space-x-4 h-full group transform hover:-translate-y-1">
                <Award className="h-10 w-10 text-yellow-500 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:rotate-[10deg]" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 text-base">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-gray-500 mt-1">{cert.date}</p>}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 group/link"
                    >
                      View Credential <ExternalLink className="h-4 w-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;