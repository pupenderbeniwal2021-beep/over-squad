import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='Right' className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto rou4xl'>
     {props.users.map(function(elem,idx){
      return(
         <RightCard img={elem.img} scolor={elem.scolor} color={elem.color} key={idx} id={idx} tag={elem.tag} intro={elem.intro} />
        )
     })}
    </div>
  )
}

export default RightContent
