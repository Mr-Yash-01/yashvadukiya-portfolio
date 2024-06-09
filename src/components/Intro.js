import React from 'react'

const Intro = () => {


  const handleResumeOnClick = () => {
      window.open('https://rxresu.me/mr-yash-01/yash-vadukiya', '_blank');
  }

  return (
    <div className='flex flex-col justify-between px-8 py-8 md:px-16 lg:px-40 xl:px-60 2xl:px-[420px]'>
        <div className='flex flex-col gap-8'>
            <p className='flex flex-col'>
                <h1 className='text-sm font-medium neon xl:text-xl'>Hello ! <span className='text-lg xl:text-2xl'>I am</span></h1>
                <h1 className='text-3xl font-semibold xl:text-5xl'>Yash Vadukiya.</h1>
                <h1 className='text-lg font-normal neon xl:text-2xl'>Software Engineer</h1>
            </p>
            <p className='text-sm font-medium xl:text-base'> 
                <h1>Final Year BTech CSE <a className='neon hover:underline hover:underline-offset-1 ' href='https://www.charusat.ac.in' target='_blank' rel='noopener noreferrer'>@CHARUSAT</a></h1>
                <h1>App & Web Development</h1>
                <h1>Explore, Learn, Build & Contribute</h1>
                <h1 className='neon'>Open to work</h1>
            </p>

            <button onClick={handleResumeOnClick} className='border px-4 py-2 max-w-32 rounded-xl neon border-[#00ffff]  hover:bg-gradient-to-bl from-black via-[#00ffff] to-black hover:text-black'>
              Resume
            </button>

            <div className='flex flex-row gap-4'>
              <a target='_blank' rel='noopener noreferrer' href='https://github.com/Mr-Yash-01'>
                <img className='w-8 h-8' src={require('../assets/icons8-github-50.png')} alt='github' />
              </a>
              <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/yash-vadukiya-a84a7626b/'>
                <img className='w-8 h-8' src={require('../assets/icons8-linkedin-50.png')} alt='linkedin'/>
              </a> 
              <a target='_blank' rel='noopener noreferrer' href='mailto:mr.yashvadukiya.2003@gmail.com'>
                <img className='w-7 h-8' src={require('../assets/icons8-mail-50.png')} alt='email'/>
              </a>  
            </div>

        </div>
        <div></div>
    </div>
  )
}

export default Intro