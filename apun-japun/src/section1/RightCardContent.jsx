import React, { useState } from 'react'

const RightCardContent = (props) => {
const [hover, setHover] = useState(false);
const [ahover, setAHover] = useState(false);
  return (
     <div>
             <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-10'>{props.intro}</p>
           <div className='flex justify-between'>
            <button style={{backgroundColor:hover?props.scolor:props.color,}} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='  text-white py-2 px-5 rounded-full font-medium cursor-pointer'>{props.tag}</button>
            <button  style={{backgroundColor:ahover?props.scolor:props.color,}} 
            onMouseEnter={() => setAHover(true)}
            onMouseLeave={() => setAHover(false)}
            className=' text-white w-10 h-10 rounded-full font-medium cursor-pointer'><i className="ri-arrow-right-line"></i></button>
           </div>
     </div>
  )
}

export default RightCardContent