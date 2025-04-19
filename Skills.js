import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Cpu, BarChart2, Settings, Code, Brain, MonitorSmartphone, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { name: "Data Analysis & Visualization", icon: BarChart2, skills: ["Power BI", "MS Excel (Advanced)", "Data Interpretation", "Reporting", "KPI Development"] },
    { name: "Data Engineering & Management", icon: Settings, skills: ["SQL", "Azure Data Factory", "Data Integration", "ETL Processes", "Database Fundamentals"] },
    { name: "Programming & Automation", icon: Code, skills: ["Python", "VBA (Macros)", "Scripting"] },
    { name: "Business Acumen", icon: Brain, skills: ["Business Analysis", "Process Improvement", "Stakeholder Management", "Strategic Planning", "Cross-functional Collaboration"] },
    { name: "Software & Tools", icon: MonitorSmartphone, skills: ["MS Office Suite", "Azure Cloud Basics", "Version Control (Git - Basic)"] },
    { name: "Soft Skills", icon: Users, skills: ["Communication", "Problem-Solving", "Adaptability", "Time Management", "Customer Service Orientation"] }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3">
            <Cpu className="h-8 w-8 text-blue-600" /> Skills & Expertise
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/70 h-full flex flex-col group transform hover:-translate-y-1">
                <div className="flex items-center mb-5">
                  <category.icon className="h-7 w-7 text-blue-600 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm border border-blue-200/50 group-hover:bg-blue-200/70 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;