import React, { useEffect, useState } from 'react'

const Profile = ({user}) => {
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    setUserData(user);
  },[])
  return (
    <>
      <section  className='max-w-3xl min-h-full flex flex-col mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center'>
        <div  className='w-40 h-40 rounded-full overflow-hidden justify-center'>
          <img src={userData.photo} alt={`${userData.name} profile avatar`} className='w-full h-full object-cover'/>
        </div>

        <div className='w-full md:w-4/5 flex flex-col items-center'>
          <p className='font-bold'>{ user.username || 'username' }</p>
          <p className='font-light text-sm text-gray-500'>{ user.name || 'name' }</p>
          <p className='font-light mb-4'>{ user.email || 'email@test.com'}</p>
          <p className='text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi voluptates, laudantium odit, exercitationem rem aperiam, impedit dolorum ab odio deserunt ipsa accusamus ea fugit distinctio vitae dolore et quam.</p>
        </div>

        <p className='font-bold my-3'>Pokemon team</p>
        <div className='grid grid-rows-2 grid-flow-col gap-2'>
          <div className='w-20 h-20 border-2 border-amber-700'></div>
          <div className='w-20 h-20 border-2 border-amber-700'></div>
          <div className='w-20 h-20 border-2 border-amber-700'></div>
          <div className='w-20 h-20 border-2 border-amber-700'></div>
          <div className='w-20 h-20 border-2 border-amber-700'></div>
          <div className='w-20 h-20 border-2 border-amber-700'></div>
        </div>
        
        <p className='font-bold my-3'>Statistics</p>
        <div className='grid grid-rows-2 grid-flow-col gap-2 text-center'>
          <div className='mb-2 px-2'>Hp</div>
          <div className='mb-2 px-2'>Speed</div>
          <div className='mb-2 px-2'>Attack</div>
          <div className='mb-2 px-2'>Defense</div>
          <div className='mb-2 px-2'>Special-Attack</div>
          <div className='mb-2 px-2'>Special-Defense</div>
        </div>
      </section>
    </>
  )
}

export default Profile