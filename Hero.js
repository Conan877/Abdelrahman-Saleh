import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-28 md:py-40 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_40px]"></div>
      <div className="absolute -bottom-40 -left-20 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-blue-600/30 opacity-20 blur-[120px]"></div>
      <div className="absolute -top-40 -right-20 -z-10 m-auto h-[350px] w-[500px] rounded-full bg-indigo-500/30 opacity-20 blur-[100px]"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">
              Abdelrahman Saleh
            </span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <p className="text-xl md:text-2xl text-blue-200/90 font-medium mb-8">Global Business Analyst | Data Engineer</p>
        </AnimatedSection>
        <AnimatedSection delay={500}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Highly motivated and results-oriented with over four years of experience driving business improvements through data analysis, process optimization, and technology implementation. Proven ability to translate complex data into actionable insights using SQL, Azure Data Factory, and Power BI.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;