import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 justify-center p-8 mt-24 md:px-16 lg:px-40 xl:px-60 2xl:px-[420px]'>
        <div className='flex items-center gap-4'>
          <hr className='flex-grow border-[#00ffff] opacity-20'></hr>
          <h1 className='text-center text-2xl'>Contact me</h1>
          <hr className='flex-grow border-[#00ffff] opacity-20'></hr>
        </div>
        <div className='flex flex-row gap-4 justify-center'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/Mr-Yash-01'>
            <img className='w-8 h-8 hover:shadow-white' src={require('../assets/icons8-github-50.png')} alt='github' />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/yash-vadukiya-a84a7626b/'>
            <img className='w-8 h-8' src={require('../assets/icons8-linkedin-50.png')} alt='linkedin'/>
          </a> 
          <a target='_blank' rel='noopener noreferrer' href='mailto:mr.yashvadukiya.2003@gmail.com'>
            <img className='w-7 h-8' src={require('../assets/icons8-mail-50.png')} alt='email'/>
          </a>  
        </div>
    </div>
  )
}

export default Contact