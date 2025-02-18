import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center p-6'>
        <div >
            <h2 className='text-4xl font-bold'>Delicious Food is waiting for you</h2>
            <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet </p>
            <div className='flex gap-4 p-4'>
                <button className='bg-orange-400 rounded-xl py-2 px-4 text-xl text-white hover:bg-orange-500 transition'>Food Menu</button>
                <button className='bg-white rounded-xl py-2 px-4 text-xl hover:bg-gray-100'>Book Table</button>
            </div>
        </div>
        <div className='max-w-xl'>
            <img src='/1-DaliWwtK.png' className='h-auto w-full'></img>
        </div>
    </div>
  )
}

export default Hero
