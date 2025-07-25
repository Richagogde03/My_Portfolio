import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import Profile_picture from '../../assets/richa_gogde_passport_photo.jpg'

const About = () => {
  return (
    <section id='about'
    className='min-h-screen py-4 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32'>

      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* Left sidee */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight '>
          Hi, I am
        </h1>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
          Richa Gogde
        </h2>

        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight '>
          <span className='text-white'>
            I am a
          </span>
          <Typewriter
            words={[
              ' Frontend Developer',
              ' Web Developer',
              ' Coder'
            ]}
            loop={true}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            cursorRenderer={(cursor) =>{
              <span className='text-[#8245ec]'>{cursor}</span>
            }}
          />
        </h3>

        <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
          I am a frontend and aspiring full-stack developer with a background in Computer Science, 
          recently graduated and actively seeking a role in web development. I have hands-on experience building responsive, 
          user-friendly applications and a solid understanding of both frontend and backend fundamentals.
        </p>
        <button>
          <a href="https://docs.google.com/document/d/1T_wWyFQmcn2XoH-G6GslB1khspioOhj7dCwtUHAq8O8/edit?usp=sharing "
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
          style={{
            background:'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}>
            DOWNLOAD CV
          </a>
        </button>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end m-3 '>
        <Tilt
        className='w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}>
          <img src={Profile_picture} alt="Richa Gogde" 
          className='w-full h-full rounded-full object-cover drop-shadow -[0_10px_18px_rgba(130,69,236,0.5)]' />
        </Tilt>

        </div>
      </div>

    </section>
  )
}

export default About