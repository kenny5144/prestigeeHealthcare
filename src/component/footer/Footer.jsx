import React from 'react'

const Footer = () => {
  return (
    <div className='flex  bg-servicescolor justify-center'>
      <div className='flex h-20 items-center  w-5/6 justify-between'>
        <p className='text-3xl'>Subscribe to our Newseletter </p>
   <div className='flex gap-4 text-xl'>
    
            <p className='flex items-center'>Email address:</p>
            <input placeholder='Enter your email' type="email" name="" id="" />
            <button className="text-xl inline-block py-2 px-4 rounded-lg bg-Cta">
              Submit
            </button>
   </div>
    
      </div>
    
    </div>
  )
}

export default Footer
