import React from 'react'


const Skills = () => {
  return (
    <div className='p-4 mt-24 flex flex-col gap-4 md:px-16 lg:px-40 xl:px-60 2xl:px-[420px]'>
      <div className='text-center gap-4'>
        {/* <hr className='flex-grow border-[#00ffff] opacity-20' ></hr> */}
        <h1 className='text-4xl font-semibold text-center xl:text-7xl'>Skills</h1>
        {/* <hr className='flex-grow border-[#00ffff] opacity-20'></hr> */}
      </div>

      {/* skills */}

      <div className='flex flex-col gap-6 text-slate-300 text-center lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2'>

        {/* Programming languages */}

        <div className='flex flex-col gap-4 border border-[rgba(0,255,255,0.2)] rounded-xl p-4'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-solidity-48.png')} alt='dart logo'></img>
              <h1>Solidity</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-dart-48.png')} alt='dart logo'></img>
              <h1>Dart</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-python-48.png')} alt='dart logo'></img>
              <h1>Python</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-java-48.png')} alt='dart logo'></img>
              <h1>Java</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-c++-48.png')} alt='dart logo'></img>
              <h1>C++</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-c-48.png')} alt='dart logo'></img>
              <h1>C</h1>
            </div>
          </div>
          <h1 className='text-center opacity-40'>Programming languages</h1>
        </div>

        {/* Frontend & Frameworks*/}

        <div className='flex flex-col gap-4 border border-[rgba(0,255,255,0.2)] rounded-xl p-4'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-html-48.png')} alt='dart logo'></img>
              <h1>HTML</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-css-48.png')} alt='dart logo'></img>
              <h1>CSS</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-tailwind-css-48.png')} alt='dart logo'></img>
              <h1>Tailwind</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-react-48.png')} alt='dart logo'></img>
              <h1>React</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-flutter-48.png')} alt='dart logo'></img>
              <h1>Flutter</h1>
            </div>
          </div>
          <h1 className='text-center opacity-40'>Frontend & Frameworks</h1>
        </div>

        {/* backend &  Databases */}

        <div className='flex flex-col gap-4 border border-[rgba(0,255,255,0.2)] rounded-xl p-4'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-js-48.png')} alt='dart logo'></img>
              <h1>Javascript</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-express-js-48.png')} alt='dart logo'></img>
              <h1>Express JS</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/nodejs.png')} alt='dart logo'></img>
              <h1>Node Js</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-firebase-48.png')} alt='dart logo'></img>
              <h1>Firebase</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/mongodb.png')} alt='dart logo'></img>
              <h1>MongoDB</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-oracle-48.png')} alt='dart logo'></img>
              <h1>Oracle</h1>
            </div>
          </div>
          <h1 className='text-center opacity-40'>Backend & Databases</h1>
        </div>

        {/* core */}

        <div className='flex flex-col gap-4 border border-[rgba(0,255,255,0.2)] rounded-xl p-4'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-oops-48.png')} alt='dart logo'></img>
              <h1>OOPS</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-operating-system-48.png')} alt='dart logo'></img>
              <h1>Operating System</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-network-48.png')} alt='dart logo'></img>
              <h1>Networking</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all transition-all flex flex-col items-center'>
              <img className='' src={require('../assets/icons8-database-administrator-48.png')} alt='dart logo'></img>
              <h1>Databases</h1>
            </div>
            <div className='hover:scale-110 hover:transition-all  transition-all flex flex-col items-center '>
              <img className='' src={require('../assets/icons8-algorithms-48.png')} alt='dart logo'></img>
              <h1>Algorithms</h1>
            </div>
          </div>
          <h1 className='text-center opacity-40'>Core Concepts</h1>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Skills