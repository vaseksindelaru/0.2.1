import React from 'react'
import Stepper from '@/components/Stepper'
import StepperControl from '@/components/StepperControl'

 const Modal = () => {
  return (
    <div className=''>
    <main className=''>
<div className=''>
<div className='relative md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-yellow-300'>
    <div className='container horizontal mt-5'>
        <Stepper></Stepper>
        </div>
        <StepperControl></StepperControl>
       
        </div>
    
        <h1 className='bg-blue-300 pt-20'>Modal</h1>
        
        </div>
        </main>
        </div>
  )
}

export default Modal