import React from 'react'

const Newsletter = () => {
  return (
    <div className='pb-[5rem] pt-[5rem]'>
      <div className='text-center'>
        <h1 className='text-[30px] font-bold sm:text-[38px] md:text-[50px] text-black'>Subscribe to our Newsletter</h1>
        <p className='mt-[1rem] text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto'>
          Subscribe to our newsletter to get the latest updates on our delicious burgers and offers.
        </p>
        <div className='flex justify-center mt-[3rem] items-center space-x-2'>
          <input
            type='email'
            placeholder='Enter your email'
            className='px-5 py-4 w-[40%] rounded-md border border-gray-300 outline-none'
          />
          <button className='px-8 py-4 bg-green-700 hover:bg-green-600 transition-all duration-200 font-bold text-white rounded-md ml-[1rem]'>Subscribe</button>
          </div>
      </div>
    </div>
  )
}

export default Newsletter
