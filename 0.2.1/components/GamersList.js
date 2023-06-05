import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {selectTask} from '@/redux/redusers/managerSelect'

export default function GamersList () {
const gamers= useSelector (state => state.gamersSelect)
const gamersDispatch = useDispatch ()
//console.log(gamers)
return (
<section>
  <div>

<h2>GamersList</h2>
{ gamers.map ((g,index) => ( 

<article key={index} className='text-white '>
        <div>
       <img src={g.foto} alt={g.name} className='w-32 h-32 object-cover rounded-full' ></img>
        <h3>{g .name}</h3>
        </div>
    
          <button onClick={()=> gamersDispatch(selectTask(g))}>add</button>
</article>
       
 
        )) }
        
        </div>
        </section>
)}

