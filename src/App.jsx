import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import BlurBlob from './Components/BlurBlob';

const App = () => {
  return (
    <div className='bg-[#050414]'>

      <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%'}}></BlurBlob>
      <div
        className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' 
      ></div>

      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
