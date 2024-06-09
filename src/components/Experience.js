import React from 'react'

const Experience = () => {
  return (
    <div className='p-4 mt-28 md:px-16 lg:px-40 xl:px-60 2xl:px-[420px]'>
        <div className='text-center gap-4'>
        {/* <hr className='flex-grow border-[#00ffff] opacity-20' ></hr> */}
        <h1 className='text-4xl font-semibold text-center xl:text-7xl'>Experience</h1>
        {/* <hr className='flex-grow border-[#00ffff] opacity-20'></hr> */}

        {/* Experience */}

        <div className='flex flex-col mt-8 gap-4 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2'>
          <div className='flex flex-col text-left px-8 py-4 rounded-2xl bg-[#1c1e1f]'>
            <h1 className='text-lg'>Web Developer</h1>
            <h1 className='neon text-2xl'><a href='https://prodigyinfotech.dev' target='_blank' rel='noopener noreferrer'>Prodigy Infotech</a></h1>
            <h1 className='text-gray-500'>May 2024 - June 2024</h1>
            <ul className='custom-bullet mt-6 text-lg'>
              <li>Building responsive websites using ReactJS, NextJS, and TailwindCSS.</li>
              <li>Learned MERN stack development.</li>
              <li>Working of APIs and Servers.</li>
            </ul>
          </div>
          <div className='flex flex-col text-left px-8 py-4 rounded-2xl bg-[#1c1e1f]'>
            <h1 className='text-lg'>Flutter Developer</h1>
            <h1 className='neon text-2xl'><a href='https://microtechos.com' target='_blank' rel='noopener noreferrer'>Microtech OS</a></h1>
            <h1 className='text-gray-500'>May 2023 - June 2023</h1>
            <ul className='custom-bullet mt-6 text-lg'>
              <li>Structuring user friendly apps using flutter, dart, firebase.</li>
              <li>Learned multiplateform app development.</li>
              <li>Made social media app</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience