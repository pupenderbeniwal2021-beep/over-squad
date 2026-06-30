import React from 'react'

const Card = (props) => {
  return (
    <div> 
       <a href={props.elem.url} target='_blank'>
          <div className='userimg h-70 w-50 bg-white rounded-2xl overflow-hidden'>
            <img
              className='h-full w-full object-cover '
              src={props.elem.download_url} alt="error..." />
          </div>
          <h3 className='font-bold text-lg'>{props.elem.author}</h3>
        </a>
    </div>
  )
}

export default Card
