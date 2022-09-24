import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Vue from '../assets/vue.svg';
import GitHub from '../assets/github.png';



const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>// These are technologies I've worked with &#127775;</p>
        </div>

        <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2'>
            <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2'>
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2'>
            <img className='w-20 mx-auto' src={Vue} alt="Vue" />
            <p className='my-4'>Vue</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills