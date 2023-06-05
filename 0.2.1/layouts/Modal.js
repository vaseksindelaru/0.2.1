import React from 'react'

 const Modal = ({children}) => {
  return (
    <main className='bg-green-800'>
    <div>
    {children}
        <h1 className='bg-blue-300 pt-80'>Modal</h1>
        </div>
        </main>
  )
}

export default Modal