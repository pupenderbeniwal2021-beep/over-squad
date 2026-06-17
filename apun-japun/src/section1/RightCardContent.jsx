import React from 'react'

const RightCardContent = (props) => {
  return (
     <div>
             <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-10'>{props.intro}</p>
           <div className='flex justify-between'>
             <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white py-2 px-5 rounded-full font-medium'>{props.tag}</button>
            <button  style={{backgroundColor:props.color}} className='bg-blue-600 text-white w-10 h-10 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
           </div>
     </div>
  )
}

export default RightCardContent