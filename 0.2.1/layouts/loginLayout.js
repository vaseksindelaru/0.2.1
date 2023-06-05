import React, { Children } from 'react'


import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { CiMenuFries } from "react-icons/ci"
import Modal from './Modal';
import Stepper from '@/components/Stepper';
import StepperControl from '@/components/StepperControl';




 const LoginLayout = () => {
  return (
    
    <div className=''> 
   
        <header className='bg-[#171C26] text-[#2F384C] fixed pl-[120px] w-full flex items-start justify-between p-6'>
        
 <nav className='flex items-center gap-5'>
 <a href='http://localhost:3000/gameList' className='bg-blue-600 px-4 py-2 rounded-xl'>games</a>
          <a href='http://localhost:3000/manage' className='bg-blue-600 px-4 py-2 rounded-xl'>managers</a>
          <a href='http://localhost:3000' className='bg-blue-600 px-4 py-2 rounded-xl'>index</a>
 </nav>
 <div className=''>buscador</div>
 <div className='flex gap-x-6 px-8'> 
  <a href='http://localhost:3000/log' className='bg-red-600 px-4 py-2 rounded-xl'>login</a>
          <Menu menuButton={<MenuButton><CiMenuFries /></MenuButton>} transition> 
          <MenuItem href='http://localhost:3000/perfil'>Perfil</MenuItem>
          <MenuItem>Copy</MenuItem>
           <MenuItem>Paste</MenuItem>
           <MenuItem>Paste</MenuItem>
           </Menu>

  </div>
  <h1 className='bg-blue-300 pt-20'>Modal</h1>
</header>

<Modal></Modal>
        </div>
  )
}
export default LoginLayout
