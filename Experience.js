import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Global Business Analyst & Data Engineer",
      company: "Teleperformance",
      location: "Cairo, Egypt",
      period: "March 2023 - Present",
      points: [
        "Developed and delivered analytical reports identifying KPIs, uncovering trends, and highlighting improvement areas.",
        "Collaborated with cross-functional teams to analyze datasets, identify drivers, and translate findings into recommendations.",
        "Engineered and automated data integration workflows using Azure Data Factory and SQL, enhancing accessibility and efficiency.",
        "Presented data-driven insights to senior management, influencing operational improvements and decision-making.",
      ]
    },
    {
      role: "MIS-BI Analyst",
      company: "Raya CX",
      location: "Cairo, Egypt",
      period: "December 2020 - March 2023",
      points: [
        "Created analytical reports to evaluate performance, pinpoint opportunities, and ensure operational continuity.",
        "Automated reporting tasks using Python and VBA, significantly improving speed and accuracy.",
        "Communicated findings and recommendations to senior leadership, supporting data-informed strategic planning.",
      ]
    },
    {
      role: "Escalation Specialist",
      company: "Raya CX",
      location: "Cairo, Egypt",
      period: "March 2019 - December 2020",
      points: [
        "Resolved complex customer complaints and escalated critical issues effectively.",
        "Utilized de-escalation techniques and customer service skills to manage tense situations.",
        "Maintained comprehensive knowledge of company policies for accurate support.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-blue-600" /> Professional Journey
          </h2>
        </AnimatedSection>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-1 bottom-0 w-1 bg-blue-200 rounded"></div>
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="relative pl-14 mb-12 group">
                <div className="absolute left-[18px] top-1 w-6 h-6 bg-white border-4 border-blue-500 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-600"></div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/80 transform group-hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-blue-700 font-medium mb-1">{exp.company} - <span className="text-gray-600 font-normal">{exp.location}</span></p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2 text-base">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;