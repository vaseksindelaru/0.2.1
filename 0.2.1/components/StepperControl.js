import React from 'react'

const StepperControl = () => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <button className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-2oo easy-in-out'>
            back
        </button>
        <button className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-2oo easy-in-out'>
            next
        </button>
        </div>
  )
}

export default StepperControl