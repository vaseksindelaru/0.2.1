import React from 'react'
import GamersSelect from '../../components/GamersSelect'
import GamersList from '../../components/GamersList'
import { HeaderLayout } from '@/layouts/headerLayout'

 const Manage = () => {
  return (
    <div>
      <HeaderLayout>
        <div>
       <GamersSelect/>
       <GamersList /> 
       </div>
       </HeaderLayout>
    </div>
  )
}
export default Manage