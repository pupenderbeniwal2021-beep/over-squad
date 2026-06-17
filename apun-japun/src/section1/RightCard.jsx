import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative shrink-0 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2  style={{backgroundColor:props.color}} className='text-white rounded-full text-xl font-semibold w-12 h-12 flex justify-center items-center '>{props.id+1}</h2>
          <RightCardContent tag={props.tag} color={props.color} intro={props.intro}/>
      </div>
    </div>
  )
}

export default RightCard
