import React from 'react'
import {  useSelector } from 'react-redux'
//import {selectTask} from "@/redux/reducers/managerSelect"

function GamersSelect () {
//const gamersDispatch = useDispatch ()
  const titulares= useSelector (state => state.titularSelect)
  console.log(titulares)
  return (
    <div>
      <h2>GamersSelect</h2>
     
    <div className='cancha'>
{titulares.map((t,index)=>(
  <artical key={index} className="text-white" >
    <div grid grid->
    <img src={t.foto} alt={t.name} className='w-32 h-32 object-cover rounded-full'></img>
        <h3>{t.name}</h3>
        <button>XXX</button>
    </div>

  </artical>
))}
    </div>

    </div>
  )
}

export default GamersSelect