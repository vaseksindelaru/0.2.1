import React from 'react'

const Stepper = () => {
  return (<div className=''>
    <div className='mx-4 p-4 flex justify-between items-center'
    >
        <div className='relative flex flex-col items-center text-teal-600'>
        <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3'>
            1
        </div>
        <div className='absolute top-0 text-cennter mt-16 w-32 text-xs font-medium uppercase'>
            description
        </div>
        </div>
        <div className='flex-auto border-t-2 transition duration-500 ease-in-out'></div>
    </div>
    </div>
  )
}

export default Stepper