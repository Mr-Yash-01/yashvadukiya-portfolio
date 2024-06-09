import React from 'react'

const Projects = () => {
  return (
    <div className='p-4 mt-28 flex flex-col gap-4 md:px-16 lg:px-40 xl:px-60 2xl:px-[420px]'> 
      <div className='text-center gap-4 mb-8'>
        {/* <hr className='flex-grow border-[#00ffff] opacity-20' ></hr> */}
        <h1 className='text-4xl font-semibold text-center xl:text-7xl'>Projects</h1>
        {/* <hr className='flex-grow border-[#00ffff] opacity-20'></hr> */}
      </div>

      {/* Projects */}

      <div className='flex flex-col gap-24'>

        {/* Project 1 */}
        <div className='flex flex-col-reverse gap-12 md:flex-row lg:flex-row xl:flex-row'>
          <div className='h-fit border rounded-xl border-[rgba(240,240,240,0.2)]'>
            <div className='px-6 flex h-8 items-center gap-2'>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
            </div>
            <div className='flex'>
              <img className='flex-grow border border-transparent rounded-b-xl' src={require('../assets/Votingsystem.png')} alt='logo'></img>

              <div></div>
            </div>
          </div>
          <div className='py-4'>
            <h1 className='text-2xl px-6 font-semibold'>1. Blockchain based Voting System</h1>
            <div className='px-6 py-4 border border-transparent rounded-2xl bg-[#1c1e1f] mt-4'>
              <p>Decentralized voting with Ethereum, Meta Mask, and Firebase for secure, transparent, immutable elections and governance.</p>
            </div>
            <p className='neon px-6 py-4'>
              Decentralized systems | Solidity | React | JS | MetaMask | Hardhat
            </p>
            <a href='https://github.com/Mr-Yash-01/VotingSystem' target='_blank' rel='noopener noreferrer'>
              <img className='px-6' alt='logo' src={require('../assets/icons8-github-50.png')}>
              </img>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className='flex flex-col gap-12 md:flex-row lg:flex-row xl:flex-row'>
          <div className='py-4'>
            <h1 className='text-2xl px-6 font-semibold'>2. DevMine</h1>
            <div className='px-6 py-4 border border-transparent rounded-2xl bg-[#1c1e1f] mt-4'>
              <p>developer-focused social platform with Firebase for authentication, database and cloud storage, enhancing user experience.</p>
            </div>
            <p className='neon px-6 py-4'>
              Android | Flutter | Dart | Firebase
            </p>
            <a href='https://github.com/Mr-Yash-01/DevMine' target='_blank' rel='noopener noreferrer'>
              <img className='px-6' alt='logo' src={require('../assets/icons8-github-50.png')}>
              </img>
            </a>
          </div>
          <div className='h-fit border rounded-xl border-[rgba(240,240,240,0.2)]'>
            <div className='px-6 flex h-8 items-center gap-2'>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
            </div>
            <div className='flex'>
              <img className='flex-grow border border-transparent rounded-b-xl' src={require('../assets/DevMine.png')} alt='logo'></img>

            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className='flex flex-col-reverse gap-12 md:flex-row  lg:flex-row xl:flex-row'>
          <div className='h-fit border rounded-xl border-[rgba(240,240,240,0.2)]'>
            <div className='px-6 flex h-8 items-center gap-2'>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
              <div className='border border-transparent w-3 h-3 bg-[#535353] rounded-full'></div>
            </div>
            <div className='flex'>
              <img className='flex-grow border border-transparent rounded-b-xl' src={require('../assets/VoiceAssistant.png')} alt='logo'></img>
            </div>
          </div>
          <div className='py-4'>
            <h1 className='text-2xl px-6 font-semibold'>3. Console based Desktop Voice Assistant</h1>
            <div className='px-6 py-4 border border-transparent rounded-2xl bg-[#1c1e1f] mt-4'>
              <p>Crafted a versatile voice assistant, adept at online and offline tasks: opening apps, fetching data, and system control.</p>
            </div>
            <p className='neon px-6 py-4'>
            Python 3 | Speech Recognition | OS | Tkinter | Multi threading
            </p>
            <a href='https://github.com/Mr-Yash-01/VoiceAssistant' target='_blank' rel='noopener noreferrer'>
              <img className='px-6 ' alt='logo' src={require('../assets/icons8-github-50.png')}>
              </img>
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Projects